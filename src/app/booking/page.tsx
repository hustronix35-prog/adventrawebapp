import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import BookingWizard from "@/components/booking/flow/BookingWizard";

export default async function BookingPage(props: { searchParams: Promise<{ tripId?: string }> }) {
    const searchParams = await props.searchParams;
    const { tripId } = searchParams;

    if (!tripId) {
        redirect("/trips");
    }

    const trip = await prisma.trip.findUnique({
        where: { id: tripId },
    });

    if (!trip) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-24">
            <div className="container mx-auto px-4">
                <BookingWizard trip={trip} />
            </div>
        </div>
    );
}
