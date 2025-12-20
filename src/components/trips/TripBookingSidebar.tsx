"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TripBookingSidebarProps {
    price: number;
    tripId: string;
}

export default function TripBookingSidebar({ price, tripId }: TripBookingSidebarProps) {
    const [date, setDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState(2);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    // Calculate total price
    const total = price * guests;

    // Build booking URL with params
    const bookingUrl = `/booking?tripId=${tripId}&date=${date ? date.toISOString() : ''}&guests=${guests}`;

    return (
        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <span className="text-gray-500 mb-1">/ person</span>
            </div>

            <div className="space-y-4 mb-6">
                {/* Date Selection */}
                <div className="relative">
                    <div
                        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                        className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors bg-white relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="font-semibold text-gray-900">
                                {date ? date.toLocaleDateString() : "Select Dates"}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 pl-8">
                            {date ? "Date selected" : "Check availability"}
                        </p>
                    </div>

                    {isDatePickerOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 z-20 bg-white p-2 rounded-xl shadow-xl border border-gray-100">
                            <DatePicker
                                selected={date}
                                onChange={(d) => {
                                    setDate(d);
                                    setIsDatePickerOpen(false);
                                }}
                                inline
                                minDate={new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Guest Selection */}
                <div className="border border-gray-200 rounded-xl p-4 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold text-gray-900">Guests</span>
                    </div>
                    <div className="flex items-center justify-between pl-8">
                        <button
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                        >
                            -
                        </button>
                        <span className="font-medium text-gray-900">{guests} Adults</span>
                        <button
                            onClick={() => setGuests(Math.min(20, guests + 1))}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Total Summary */}
            <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                <span className="text-gray-500 font-medium">Total Price</span>
                <span className="text-xl font-bold text-gray-900">${total}</span>
            </div>

            <Link href={bookingUrl}>
                <Button className="w-full py-4 text-lg rounded-xl mb-4">
                    Book This Trip
                </Button>
            </Link>

            <p className="text-center text-sm text-gray-500 mb-6">
                You won't be charged yet
            </p>
        </div>
    );
}
