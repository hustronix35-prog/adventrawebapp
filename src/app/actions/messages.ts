'use server'

import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getConversations() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return []

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) return []

    // Get all messages where user is sender OR recipient OR userId (for Organizer chats)
    // Actually, for User-to-User, we check sentMessages and receivedMessages.
    // For User-to-Organizer, we check messages where userId is this user.

    // Let's simplify: fetch all messages where userId == user.id OR recipientId == user.id
    // Wait, if sender is ORGANIZER, userId is the recipient (User).
    // If sender is USER, userId is the sender (User).
    // So `userId` field always points to the User involved in the Organizer-User chat.

    // But for User-to-User, we use `recipientId` and `userId` (as sender).
    // Let's assume for User-to-User:
    // Sender: USER, userId: senderId, recipientId: recipientId.

    const messages = await prisma.message.findMany({
        where: {
            OR: [
                { userId: user.id },
                { recipientId: user.id }
            ]
        },
        orderBy: { createdAt: 'asc' },
        include: {
            user: true,
            recipient: true,
            organizer: true
        }
    })

    const conversationsMap = new Map()

    for (const msg of messages) {
        // Determine the "other" party
        let otherId, otherName, otherAvatar, otherType

        if (msg.organizerId) {
            // Chat with Organizer
            otherId = msg.organizerId
            otherName = msg.organizer?.name || 'Organizer'
            otherAvatar = msg.organizer?.image || 'https://ui-avatars.com/api/?name=Organizer'
            otherType = 'ORGANIZER'
        } else {
            // User to User
            if (msg.userId === user.id) {
                // I am sender, other is recipient
                otherId = msg.recipientId
                otherName = msg.recipient?.name || 'Unknown User'
                otherAvatar = msg.recipient?.image || 'https://ui-avatars.com/api/?name=User'
                otherType = 'USER'
            } else {
                // I am recipient, other is sender
                otherId = msg.userId
                otherName = msg.user?.name || 'Unknown User'
                otherAvatar = msg.user?.image || 'https://ui-avatars.com/api/?name=User'
                otherType = 'USER'
            }
        }

        if (!otherId) continue // Should not happen

        if (!conversationsMap.has(otherId)) {
            conversationsMap.set(otherId, {
                id: otherId,
                name: otherName,
                avatar: otherAvatar,
                type: otherType,
                lastMessage: msg.content,
                time: msg.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                unread: 0,
                online: false,
                messages: []
            })
        }

        // Update last message (since we iterate asc, the last one will overwrite)
        const conv = conversationsMap.get(otherId)
        conv.lastMessage = msg.content
        conv.time = msg.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        conv.messages.push({
            id: msg.id,
            senderId: msg.sender === 'ORGANIZER' ? msg.organizerId : msg.userId,
            text: msg.content,
            time: msg.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: (msg.sender === 'USER' && msg.userId === user.id) || (msg.sender === 'ORGANIZER' && false) // User is never Organizer
        })
    }

    return Array.from(conversationsMap.values())
}

export async function sendMessage(receiverId: string, content: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return null

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) return null

    // Check if receiver is Organizer or User
    // For simplicity, let's assume if it looks like a CUID it's a user, unless we have a flag.
    // But we need to know.
    // Let's try to find if receiver is Organizer first?
    // Or we can pass a type. But the UI just passes ID.
    // We can try to find User with that ID.

    const receiverUser = await prisma.user.findUnique({ where: { id: receiverId } })
    const receiverOrganizer = !receiverUser ? await prisma.organizer.findUnique({ where: { id: receiverId } }) : null

    let messageData: any = {
        content,
        sender: 'USER',
        userId: user.id,
    }

    if (receiverUser) {
        messageData.recipientId = receiverUser.id
    } else if (receiverOrganizer) {
        messageData.organizerId = receiverOrganizer.id
    } else {
        return null // Receiver not found
    }

    const message = await prisma.message.create({
        data: messageData
    })

    return {
        id: message.id,
        senderId: user.id,
        text: message.content,
        time: message.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true
    }
}
