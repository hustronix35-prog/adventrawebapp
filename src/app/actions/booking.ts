"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createBooking(formData: FormData) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "You must be logged in to book a trip" };
    }

    const tripId = formData.get("tripId") as string;
    const guests = parseInt(formData.get("guests") as string);
    const dateInput = formData.get("date") as string;

    if (!tripId || !guests || !dateInput) {
        return { error: "Missing required booking details" };
    }

    const date = new Date(dateInput);

    try {
        // Fetch trip to get real price
        const trip = await prisma.trip.findUnique({
            where: { id: tripId },
        });

        if (!trip) {
            return { error: "Trip not found" };
        }

        const totalPrice = (trip.price * guests) + 150; // Base * guests + fees

        await prisma.booking.create({
            data: {
                userId: session.user.id,
                tripId,
                guests,
                date,
                totalPrice,
                status: "confirmed",
            },
        });

        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        console.error("Booking error:", error);
        return { error: "Failed to create booking" };
    }
}
