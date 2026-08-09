import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const tripCount = await prisma.trip.count();
        const userCount = await prisma.user.count();

        // Also try to fetch one trip to verify read access
        const sampleTrip = await prisma.trip.findFirst({
            select: { id: true, title: true }
        });

        return NextResponse.json({
            status: "connected",
            database: "reachable",
            counts: {
                trips: tripCount,
                users: userCount
            },
            sample: sampleTrip || "No trips found",
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        console.error("Health Check Failed:", error);
        return NextResponse.json({
            status: "error",
            database: "unreachable",
            message: error.message,
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}
