"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MobileBookingBarProps {
    price: number;
    tripId: string;
}

export default function MobileBookingBar({ price, tripId }: MobileBookingBarProps) {
    return (
        <div className="fixed bottom-20 left-4 right-4 z-[60] md:hidden">
            <div className="bg-gray-900/90 backdrop-blur-md text-white p-3 rounded-full shadow-2xl flex items-center justify-between border border-white/10 animate-in slide-in-from-bottom-5 fade-in duration-500">
                <div className="pl-4 flex flex-col">
                    <span className="text-[10px] text-gray-300 uppercase tracking-wider font-medium">Total Price</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">${price}</span>
                        <span className="text-xs text-gray-400">/ person</span>
                    </div>
                </div>

                <Link href={`/booking?tripId=${tripId}`}>
                    <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
