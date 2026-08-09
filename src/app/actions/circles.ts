"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createCircle(formData: FormData) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "You must be logged in to create a circle" };
    }

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    if (!name || !description) {
        return { error: "Missing required fields" };
    }

    try {
        // @ts-ignore - Prisma client needs regeneration
        const circle = await prisma.circle.create({
            data: {
                name,
                description,
                ownerId: session.user.id,
                members: {
                    create: {
                        userId: session.user.id,
                    },
                },
            },
        });

        revalidatePath("/circles");
        return { success: true, circleId: circle.id };
    } catch (error) {
        console.error("Create circle error:", error);
        return { error: "Failed to create circle" };
    }
}

export async function joinCircle(circleId: string) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "You must be logged in to join a circle" };
    }

    try {
        // @ts-ignore - Prisma client needs regeneration
        await prisma.circleMember.create({
            data: {
                circleId,
                userId: session.user.id,
            },
        });

        revalidatePath(`/circles/${circleId}`);
        revalidatePath("/circles");
        return { success: true };
    } catch (error) {
        console.error("Join circle error:", error);
        return { error: "Failed to join circle" };
    }
}

export async function leaveCircle(circleId: string) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "You must be logged in to leave a circle" };
    }

    try {
        // @ts-ignore - Prisma client needs regeneration
        await prisma.circleMember.deleteMany({
            where: {
                circleId,
                userId: session.user.id,
            },
        });

        revalidatePath(`/circles/${circleId}`);
        revalidatePath("/circles");
        return { success: true };
    } catch (error) {
        console.error("Leave circle error:", error);
        return { error: "Failed to leave circle" };
    }
}
