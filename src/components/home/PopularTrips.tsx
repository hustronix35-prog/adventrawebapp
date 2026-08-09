import { prisma } from "@/lib/prisma";
import TripCard from "../trips/TripCard";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Trip } from "@prisma/client";

export default async function PopularTrips() {
    let trips: Trip[] = [];
    try {
        // Fetch top 4 active trips, prioritizing those with images
        trips = await prisma.trip.findMany({
            where: {
                status: 'active', // Ensure we only show active trips
                deletedAt: null
            },
            take: 4,
            orderBy: [
                { views: 'desc' }, // Sort by views (popularity)
                { rating: 'desc' } // Fallback to rating
            ]
        });
    } catch (error) {
        console.error("Failed to fetch popular trips:", error);
        // Fallback to empty array
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12" data-aos="fade-up">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Popular Adventures
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Discover our most loved trips, handpicked for their breathtaking views and unforgettable experiences.
                        </p>
                    </div>
                    <Link href="/trips" className="hidden md:block">
                        <Button variant="outline" className="rounded-full">
                            View All Trips <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {trips.length > 0 ? (
                        trips.map((trip) => (
                            <TripCard
                                key={trip.id}
                                id={trip.id}
                                title={trip.title}
                                image={trip.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80'} // Fallback image
                                location={trip.location}
                                duration={trip.duration || `${trip.durationDays} Days`}
                                rating={trip.rating || 0}
                                reviews={trip.reviewCount || 0}
                                price={trip.price}
                                difficulty={trip.difficulty}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500">No popular trips found at the moment.</p>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/trips">
                        <Button variant="outline" className="w-full rounded-full">
                            View All Trips <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
