import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import DashboardClient from "@/components/dashboard/DashboardClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    let session;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        // @ts-ignore
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.error("Session error:", error);
        redirect("/api/auth/signout");
    }

    if (!session || !session.user) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        include: {
            bookings: {
                include: {
                    trip: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });

    if (!user) {
        redirect("/login");
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-24">
            <div className="container mx-auto px-4">
                <DashboardClient user={user} />
            </div>
        </div>
    );
}
