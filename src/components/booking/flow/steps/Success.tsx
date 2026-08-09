"use client";

import Button from "@/components/ui/Button";
import { CheckCircle2, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BookingState } from "../BookingWizard";
import { Trip } from "@prisma/client";

interface SuccessStepProps {
    trip: Trip;
    state: BookingState;
}

export default function SuccessStep({ trip, state }: SuccessStepProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500 py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>

            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    Get ready for an adventure! Your trip to <span className="font-semibold text-gray-900">{trip.title}</span> has been successfully booked.
                </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full max-w-sm space-y-4 text-left">
                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Destination</p>
                        <p className="font-medium text-gray-900">{trip.location}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Date</p>
                        <p className="font-medium text-gray-900">
                            {state.date?.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard">
                    <Button variant="outline" size="lg">
                        Go to Dashboard
                    </Button>
                </Link>
                <Link href="/trips">
                    <Button size="lg" className="bg-gradient-brand">
                        Explore More Trips <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
