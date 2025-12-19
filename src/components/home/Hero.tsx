"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Mountain } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [activity, setActivity] = useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.set("location", location);
        if (date) params.set("date", date);
        if (activity) params.set("activity", activity);

        router.push(`/trips?${params.toString()}`);
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
                    alt="Adventure Landscape"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                    data-aos="fade-up"
                    data-aos-delay="0"
                >
                    Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Adventure</span>
                </h1>
                <p
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Curated trekking and outdoor experiences for those who seek the extraordinary.
                </p>

                {/* Search Bar */}
                <div
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full max-w-4xl mx-auto shadow-2xl hidden md:flex items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="flex-1 flex items-center px-6 border-r border-white/20">
                        <MapPin className="w-5 h-5 text-gray-300 mr-3" />
                        <input
                            type="text"
                            placeholder="Where to?"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                    </div>
                    <div className="flex-1 flex items-center px-6 border-r border-white/20">
                        <Calendar className="w-5 h-5 text-gray-300 mr-3" />
                        <input
                            type="text"
                            placeholder="Dates"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                    </div>
                    <div className="flex-1 flex items-center px-6">
                        <Mountain className="w-5 h-5 text-gray-300 mr-3" />
                        <input
                            type="text"
                            placeholder="Activity"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            className="bg-transparent border-none text-white placeholder-gray-300 focus:outline-none w-full"
                        />
                    </div>
                    <Button size="lg" className="rounded-full px-8" onClick={handleSearch}>
                        <Search className="w-5 h-5 mr-2" />
                        Search
                    </Button>
                </div>

                {/* Mobile Search Button */}
                <div
                    className="md:hidden"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Link href="/trips">
                        <Button size="lg" className="w-full max-w-xs rounded-full shadow-xl">
                            <Search className="w-5 h-5 mr-2" />
                            Start Exploring
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
