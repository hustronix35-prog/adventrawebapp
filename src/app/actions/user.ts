"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "Not authenticated" };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || !email) {
        return { error: "Name and email are required" };
    }

    try {
        await prisma.user.update({
            where: { id: session.user.id },
            data: { name, email },
        });

        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        console.error("Update profile error:", error);
        return { error: "Failed to update profile" };
    }
}
