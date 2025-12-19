import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DestinationsPage() {
    // Fetch all trips to extract unique locations
    // Fetch all trips to extract unique locations
    const trips = await prisma.trip.findMany({
        where: {
            // status: 'active', // Show all trips including drafts
            deletedAt: null,
        },
        select: {
            location: true,
            image: true,
        },
    });

    // Group by location and get one image per location
    const destinationsMap = new Map<string, { image: string | null; count: number }>();
    trips.forEach((trip) => {
        if (!trip.location) return;

        if (!destinationsMap.has(trip.location)) {
            destinationsMap.set(trip.location, { image: trip.image, count: 1 });
        } else {
            const entry = destinationsMap.get(trip.location)!;
            entry.count++;
        }
    });

    const destinations = Array.from(destinationsMap.entries()).map(([name, data]) => ({
        name: name,
        image: data.image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        count: data.count
    }));

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
                        alt="Destinations Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Explore the World</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
                        Discover breathtaking landscapes and unforgettable adventures across the globe.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
                    <p className="text-gray-500 hidden md:block">
                        {destinations.length} locations available
                    </p>
                </div>
                {destinations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination) => (
                            <Link
                                key={destination.name}
                                href={`/trips?location=${encodeURIComponent(destination.name)}`}
                                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <div className="flex items-center text-white mb-2">
                                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                                        <h2 className="text-2xl font-bold">{destination.name}</h2>
                                    </div>
                                    <p className="text-gray-300 group-hover:text-white transition-colors">
                                        {destination.count} {destination.count === 1 ? 'Adventure' : 'Adventures'} &rarr;
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No destinations found</h3>
                        <p className="text-gray-500">Check back later for new adventures.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
