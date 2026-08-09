"use client";

import { Trip } from "@prisma/client";
import { BookingState } from "../BookingWizard";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface DateSelectionProps {
    trip: Trip;
    state: BookingState;
    updateState: (updates: Partial<BookingState>) => void;
    onNext: () => void;
}

export default function DateSelection({ trip, state, updateState, onNext }: DateSelectionProps) {
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateState({ date: new Date(e.target.value) });
    };

    const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(e.target.value) || 1;
        updateState({
            guests: count,
            totalPrice: trip.price * count
        });
    };

    const isValid = state.date !== null && state.guests > 0;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">When are you going?</h2>
                <p className="text-gray-500">Choose your preferred start date and group size.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Date Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Start Date</label>
                    <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={state.date ? state.date.toISOString().split('T')[0] : ""}
                            onChange={handleDateChange}
                            className="pl-10"
                            label="" /* Intentionally empty as we have custom label above */
                            placeholder="Select date"
                        />
                    </div>
                </div>

                {/* Guests Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Guests</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input
                            type="number"
                            min={1}
                            max={trip.capacity || 20}
                            value={state.guests}
                            onChange={handleGuestsChange}
                            className="pl-10"
                            label=""
                            placeholder="Number of guests"
                        />
                    </div>
                </div>
            </div>

            {/* Price Estimate */}
            <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between border border-gray-100">
                <span className="text-gray-600 font-medium">Estimated Total</span>
                <span className="text-2xl font-bold text-primary">₹{state.totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-end pt-4">
                <Button onClick={onNext} disabled={!isValid} size="lg" className="w-full md:w-auto px-8">
                    Continue to Details
                </Button>
            </div>
        </div>
    );
}
