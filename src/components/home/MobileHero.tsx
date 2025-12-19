"use client";

import { Search, MapPin, Calendar, Mountain } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

export default function MobileHero() {
    return (
        <section className="md:hidden relative h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Mobile Adventure"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                    Explore the <br />
                    <span className="text-primary">Unseen World</span>
                </h1>
                <p className="text-gray-200 mb-8 text-sm max-w-xs mx-auto">
                    Find the best trips, organized by experts, just for you.
                </p>

                <div className="bg-white rounded-2xl p-4 shadow-xl max-w-sm mx-auto">
                    <div className="flex items-center border-b border-gray-100 pb-3 mb-3">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Where to?"
                            className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-3 py-2">
                            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-500">Dates</span>
                        </div>
                        <Button className="flex-1 rounded-xl" aria-label="Search trips">
                            <Search className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
