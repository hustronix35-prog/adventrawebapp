"use client";

import { BookingState } from "../BookingWizard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, MapPin } from "lucide-react";

interface GuestDetailsProps {
    state: BookingState;
    updateState: (updates: Partial<BookingState>) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function GuestDetails({ state, updateState, onNext, onBack }: GuestDetailsProps) {
    // In a real app, we would sync this with the auth session
    // For now, we'll keep it as local state within the wizard or just simple inputs
    // If we wanted to persist, we'd add fields to BookingState

    const isValid = true; // Add validation logic here

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Who is traveling?</h2>
                <p className="text-gray-500">We need a few details to confirm your booking.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input placeholder="John Doe" className="pl-10" label="" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input type="email" placeholder="john@example.com" className="pl-10" label="" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input type="tel" placeholder="+91 98765 43210" className="pl-10" label="" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Address (Optional)</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <Input placeholder="City, Country" className="pl-10" label="" />
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                <p className="font-semibold mb-1">Travelling with a group?</p>
                We'll ask for other guests details after booking confirmation.
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} size="lg" className="px-8">
                    Back
                </Button>
                <Button onClick={onNext} disabled={!isValid} size="lg" className="px-8">
                    Review Booking
                </Button>
            </div>
        </div>
    );
}
