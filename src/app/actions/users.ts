'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function searchUsers(query: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return []

    if (!query || query.length < 2) return []

    // Search Users AND Organizers?
    // For now just Users.
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { name: { contains: query } },
                { email: { contains: query } }
            ]
        },
        take: 5,
        select: {
            id: true,
            name: true,
            email: true,
            image: true
        }
    })

    return users.map(user => ({
        id: user.id,
        name: user.name || 'Unknown User',
        email: user.email,
        avatar: user.image || 'https://ui-avatars.com/api/?name=User&background=random'
    }))
}
