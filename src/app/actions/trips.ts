"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createCustomTrip(formData: FormData) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "You must be logged in to create a trip" };
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const duration = formData.get("duration") as string;
    const durationDays = parseInt(formData.get("durationDays") as string);
    const price = parseInt(formData.get("price") as string);
    const difficulty = formData.get("difficulty") as string;
    const image = formData.get("image") as string || "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; // Default image

    if (!title || !description || !location || !duration || !durationDays || !price) {
        return { error: "Missing required fields" };
    }

    try {
        await prisma.trip.create({
            data: {
                title,
                description,
                location,
                duration,
                durationDays,
                price,
                difficulty,
                image,
                // @ts-ignore - Prisma client needs regeneration
                creatorId: session.user.id,
            },
        });

        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        console.error("Create trip error:", error);
        return { error: "Failed to create trip" };
    }
}
