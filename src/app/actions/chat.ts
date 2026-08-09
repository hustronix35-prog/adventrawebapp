'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCircleMessages(circleId: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user) return [];

    const messages = await prisma.message.findMany({
        where: { circleId },
        orderBy: { createdAt: 'asc' },
        include: {
            user: true,
            organizer: true
        }
    });

    return messages.map(msg => ({
        id: msg.id,
        content: msg.content,
        createdAt: msg.createdAt,
        senderType: msg.sender, // 'USER' or 'ORGANIZER'
        senderId: msg.sender === 'USER' ? msg.userId : msg.organizerId,
        senderName: msg.sender === 'USER' ? msg.user?.name : msg.organizer?.name || 'Organizer',
        senderImage: msg.sender === 'USER' ? msg.user?.image : msg.organizer?.image,
        isMe: msg.sender === 'USER' && msg.userId === session?.user?.id
    }));
}

export async function sendCircleMessage(circleId: string, content: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user) return null;

    const message = await prisma.message.create({
        data: {
            content,
            sender: 'USER',
            userId: session.user.id,
            circleId,
        }
    });

    revalidatePath(`/circles/${circleId}`);
    return message;
}
