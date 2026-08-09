import { z } from "zod";

export const bookingSchema = z.object({
    tripId: z.string().min(1, "Trip ID is required"),
    guests: z.number().min(1, "At least 1 guest is required").max(20, "Max 20 guests allowed"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }).transform((val) => new Date(val)),
    // Total price is calculated on server, but we can validate it matches logic if sent
    // For now, we trust server calculation over client input
});

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export const userProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number").optional(),
    bio: z.string().max(500).optional(),
});
