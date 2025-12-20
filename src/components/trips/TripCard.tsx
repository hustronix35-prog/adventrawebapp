"use client";

import { useState } from "react";
import { Star, Clock, MapPin } from "lucide-react";
import Card from "../ui/Card";
import Link from "next/link";

interface TripCardProps {
    id: string;
    title: string;
    image: string;
    location: string;
    duration: string;
    rating: number;
    reviews: number;
    price: number;
    difficulty?: string;
}

export default function TripCard({
    id,
    title,
    image,
    location,
    duration,
    rating,
    reviews,
    price,
    difficulty,
}: TripCardProps) {
    const [imgSrc, setImgSrc] = useState(image);

    return (
        <Link href={`/trips/${id}`}>
            <Card variant="interactive" className="h-full flex flex-col group">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        onError={() => setImgSrc('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm">
                        <Star className="w-3 h-3 text-yellow-500 mr-1 fill-yellow-500" />
                        {rating} ({reviews})
                    </div>
                    {difficulty && (
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-white uppercase tracking-wide">
                            {difficulty}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {title}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {duration}
                        </div>
                        <div className="text-lg font-bold text-primary">
                            ${price}
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
