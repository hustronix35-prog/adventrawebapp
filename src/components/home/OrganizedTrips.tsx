import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TripCard from "../trips/TripCard";
import { prisma } from "@/lib/prisma";

export default async function OrganizedTrips() {
    // Fetch 3 random or curated trips for the "Organized Trips" section
    // In a real app, maybe filter by "isFeatured" or specific category
    // For now, we take 3 trips skipping the first 4 (used in top popular)
    const trips = await prisma.trip.findMany({
        where: {
            status: 'active',
            deletedAt: null
        },
        take: 3,
        skip: 4,
        orderBy: {
            updatedAt: 'desc'
        }
    });

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Organized Trips</h2>
                        <p className="text-gray-500">Handpicked adventures for every traveler</p>
                    </div>
                    <Link href="/trips" className="hidden md:flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                        View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trips.length > 0 ? (
                        trips.map((trip) => (
                            <TripCard
                                key={trip.id}
                                id={trip.id}
                                title={trip.title}
                                image={trip.image || 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1072&q=80'}
                                location={trip.location}
                                duration={trip.duration || `${trip.durationDays} Days`}
                                rating={trip.rating || 0}
                                reviews={trip.reviewCount || 0}
                                price={trip.price}
                                difficulty={trip.difficulty}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 bg-gray-50 rounded-lg">
                            <p className="text-gray-500">More organized trips coming soon!</p>
                        </div>
                    )}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link href="/trips">
                        <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold w-full" aria-label="View all trips">
                            View All Trips
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
