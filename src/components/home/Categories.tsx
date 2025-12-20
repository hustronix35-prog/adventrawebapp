import { Mountain, Tent, Footprints, Compass, Map, Bike } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const CATEGORY_MAP = [
    { name: "Treks", icon: Mountain, keyword: "Trek" },
    { name: "Camping", icon: Tent, keyword: "Camp" },
    { name: "Hiking", icon: Footprints, keyword: "Hik" }, // Matches Hiking/Hike
    { name: "Expeditions", icon: Compass, keyword: "Expedition" },
    { name: "Backpacking", icon: Map, keyword: "Pack" },
    { name: "Biking", icon: Bike, keyword: "Biking" },
];

export default async function Categories() {
    // Fetch counts in parallel
    let counts = [];
    try {
        counts = await Promise.all(
            CATEGORY_MAP.map(async (cat) => {
                const count = await prisma.trip.count({
                    where: {
                        status: 'active',
                        deletedAt: null,
                        OR: [
                            { title: { contains: cat.keyword } },
                            { description: { contains: cat.keyword } },
                            { tripType: { contains: cat.keyword } }
                        ]
                    }
                });
                return {
                    name: cat.name,
                    icon: cat.icon,
                    count: `${count} Trip${count !== 1 ? 's' : ''}`
                };
            })
        );
    } catch (error) {
        console.error("Failed to fetch Category counts:", error);
        // Fallback static data
        counts = CATEGORY_MAP.map(cat => ({
            name: cat.name,
            icon: cat.icon,
            count: "0 Trips"
        }));
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Browse by Category
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find the perfect adventure that suits your style. From high-altitude treks to relaxing camping trips.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {counts.map((category) => (
                        <Link
                            key={category.name}
                            href={`/trips?category=${category.name.toLowerCase()}`}
                            className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <category.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                {category.name}
                            </h3>
                            <span className="text-sm text-gray-500">{category.count}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
