'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'

export async function getCommunities() {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.email ? (await prisma.user.findUnique({ where: { email: session.user.email } }))?.id : null

    const circles = await prisma.circle.findMany({
        include: {
            _count: {
                select: { members: true }
            },
            members: {
                where: {
                    userId: userId || ''
                }
            }
        }
    })

    return circles.map(circle => ({
        ...circle,
        memberCount: circle._count.members,
        isMember: circle.members.length > 0
    }))
}

export async function joinCommunity(circleId: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) throw new Error('Not authenticated')

    const user = await prisma.user.findUnique({ where: { email: session.user.email } })
    if (!user) throw new Error('User not found')

    await prisma.circleMember.create({
        data: {
            userId: user.id,
            circleId: circleId
        }
    })

    revalidatePath('/communities')
    return { success: true }
}

export async function leaveCommunity(circleId: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) throw new Error('Not authenticated')

    const user = await prisma.user.findUnique({ where: { email: session.user.email } })
    if (!user) throw new Error('User not found')

    await prisma.circleMember.deleteMany({
        where: {
            userId: user.id,
            circleId: circleId
        }
    })

    revalidatePath('/communities')
    return { success: true }
}

export async function createCommunity(formData: FormData) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) throw new Error('Not authenticated')

    const user = await prisma.user.findUnique({ where: { email: session.user.email } })
    if (!user) throw new Error('User not found')

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const image = formData.get('image') as string

    if (!name || !description) throw new Error('Name and description are required')

    await prisma.circle.create({
        data: {
            name,
            description,
            image: image || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
            ownerId: user.id,
            members: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    revalidatePath('/communities')
    return { success: true }
}
