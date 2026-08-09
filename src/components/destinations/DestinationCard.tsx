"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
    name: string;
    image: string;
    count: number;
}

export default function DestinationCard({ name, image, count }: DestinationCardProps) {
    const [imgSrc, setImgSrc] = useState(image);

    return (
        <Link
            href={`/trips?location=${encodeURIComponent(name)}`}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={() => setImgSrc("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center text-white mb-2">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                    {count} {count === 1 ? 'Adventure' : 'Adventures'} &rarr;
                </p>
            </div>
        </Link>
    );
}
