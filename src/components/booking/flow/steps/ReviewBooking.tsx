"use client";

import { Trip } from "@prisma/client";
import { BookingState } from "../BookingWizard";
import Button from "@/components/ui/Button";
import { Calendar, Users, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ReviewBookingProps {
    trip: Trip;
    state: BookingState;
    onNext: () => void;
    onBack: () => void;
}

export default function ReviewBooking({ trip, state, onNext, onBack }: ReviewBookingProps) {
    const fee = 150;
    const finalTotal = state.totalPrice + fee;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Review & Confirm</h2>
                <p className="text-gray-500">Please review your trip details before proceeding to payment.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-6">
                {/* Trip Header */}
                <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                            src={trip.image || "/placeholder-trip.jpg"}
                            alt={trip.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg">{trip.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {trip.location}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="bg-white px-2 py-1 rounded-md text-xs font-medium border border-gray-200 text-gray-700">
                                {trip.durationDays} Days
                            </span>
                            <span className="bg-white px-2 py-1 rounded-md text-xs font-medium border border-gray-200 text-gray-700">
                                {trip.difficulty}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-200" />

                {/* Booking Details */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase">Date</span>
                        <div className="flex items-center font-medium text-gray-900">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            {state.date?.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase">Guests</span>
                        <div className="flex items-center font-medium text-gray-900">
                            <Users className="w-4 h-4 mr-2 text-primary" />
                            {state.guests} People
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-200" />

                {/* Price Breakdown */}
                <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Trip Price (x{state.guests})</span>
                        <span>₹{state.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Service Fee</span>
                        <span>₹{fee}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200 mt-2">
                        <span>Total Payable</span>
                        <span className="text-primary">₹{finalTotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} size="lg" className="px-8">
                    Back
                </Button>
                <Button onClick={onNext} size="lg" className="px-8 bg-gradient-brand hover:opacity-90">
                    Proceed to Pay
                </Button>
            </div>
        </div>
    );
}
