import TripCard from "@/components/trips/TripCard";
import Filters from "@/components/trips/Filters";
import ViewToggle from "@/components/trips/ViewToggle";
import TripMap from "@/components/trips/TripMap";
import Button from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

interface TripsPageProps {
    searchParams: {
        maxPrice?: string;
        difficulty?: string;
        duration?: string;
        category?: string;
        location?: string;
        date?: string;
        activity?: string;
        view?: string;
    };
}

export default async function TripsPage(props: { searchParams: Promise<TripsPageProps["searchParams"]> }) {
    const searchParams = await props.searchParams;
    // Build the where clause based on search params
    const where: Prisma.TripWhereInput = {};

    // Location Filter
    if (searchParams.location) {
        where.location = {
            contains: searchParams.location,
        };
    }

    // Activity Filter
    if (searchParams.activity) {
        where.OR = [
            ...(where.OR ? (Array.isArray(where.OR) ? where.OR : [where.OR]) : []),
            { title: { contains: searchParams.activity } },
            { description: { contains: searchParams.activity } },
        ];
    }

    // Price Filter
    if (searchParams.maxPrice) {
        where.price = {
            lte: parseInt(searchParams.maxPrice),
        };
    }

    // Difficulty Filter
    if (searchParams.difficulty) {
        const difficulties = searchParams.difficulty.split(",");
        where.difficulty = {
            in: difficulties,
        };
    }

    // Category Filter (from homepage)
    if (searchParams.category) {
        const categoryFilter = {
            OR: [
                { title: { contains: searchParams.category } },
                { description: { contains: searchParams.category } },
                { difficulty: { contains: searchParams.category } },
            ]
        };

        if (where.OR) {
            where.AND = [
                { OR: where.OR },
                categoryFilter
            ];
            delete where.OR;
        } else {
            where.OR = categoryFilter.OR;
        }
    }

    // Duration Filter
    if (searchParams.duration) {
        const durationRanges = searchParams.duration.split(",");
        const durationConditions: any[] = [];

        durationRanges.forEach((range) => {
            if (range === "1-3 Days") {
                durationConditions.push({ durationDays: { gte: 1, lte: 3 } });
            } else if (range === "4-7 Days") {
                durationConditions.push({ durationDays: { gte: 4, lte: 7 } });
            } else if (range === "8-14 Days") {
                durationConditions.push({ durationDays: { gte: 8, lte: 14 } });
            } else if (range === "14+ Days") {
                durationConditions.push({ durationDays: { gt: 14 } });
            }
        });

        if (durationConditions.length > 0) {
            if (where.OR) {
                where.AND = [
                    ...(where.AND ? (Array.isArray(where.AND) ? where.AND : [where.AND]) : []),
                    { OR: where.OR },
                    { OR: durationConditions }
                ];
                delete where.OR;
            } else {
                where.OR = durationConditions;
            }
        }
    }

    // Filter by status and deletedAt
    // where.status = 'active'; // Show all trips including drafts as per user request
    where.deletedAt = null;

    const trips = await prisma.trip.findMany({
        where,
        orderBy: {
            createdAt: 'desc',
        },
    });

    const isMapView = searchParams.view === "map";

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Explore Adventures</h1>
                        <p className="text-gray-500 mt-1">Found {trips.length} trips matching your criteria</p>
                    </div>
                    <ViewToggle />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/4">
                        <Filters />
                    </aside>

                    {/* Trip Grid or Map */}
                    <div className="w-full lg:w-3/4">
                        {isMapView ? (
                            <TripMap />
                        ) : (
                            <>
                                {trips.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {trips.map((trip) => (
                                            <TripCard key={trip.id} {...trip} image={trip.image ?? ""} duration={trip.duration ?? ""} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">No trips found</h3>
                                        <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                                    </div>
                                )}

                                {/* Load More */}
                                {trips.length > 0 && (
                                    <div className="mt-12 text-center">
                                        <Button variant="outline" size="lg" className="rounded-full px-12">
                                            Load More Trips
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
