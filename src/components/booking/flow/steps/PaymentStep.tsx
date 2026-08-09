"use client";

import { useState } from "react";
import { Trip } from "@prisma/client";
import { BookingState } from "../BookingWizard";
import Button from "@/components/ui/Button";
import { createBooking } from "@/app/actions/booking";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";

interface PaymentStepProps {
    trip: Trip;
    state: BookingState;
    onBack: () => void;
    onComplete: () => void;
}

export default function PaymentStep({ trip, state, onBack, onComplete }: PaymentStepProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePayment = async () => {
        setLoading(true);
        setError(null);

        try {
            // Create FormData to match existing Server Action
            const formData = new FormData();
            formData.append("tripId", trip.id);
            formData.append("guests", state.guests.toString());
            // Ensure date is valid before calling toISOString
            if (state.date) {
                formData.append("date", state.date.toISOString().split('T')[0]);
            } else {
                throw new Error("Date is missing");
            }
            formData.append("totalPrice", state.totalPrice.toString()); // Legacy support, verified on backend

            const result = await createBooking(formData);

            if (result.success) {
                onComplete();
            } else {
                setError(result.error || "Booking failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Secure Payment</h2>
                <p className="text-gray-500">Complete your booking securely.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <span className="font-semibold text-gray-700">Total Amount</span>
                    <span className="text-2xl font-bold text-gray-900">₹{state.totalPrice.toLocaleString()}</span>
                </div>

                {/* Mock Payment Options */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 border border-primary/30 bg-primary/5 rounded-lg cursor-pointer">
                        <div className="w-5 h-5 rounded-full border-[5px] border-primary" />
                        <CreditCard className="w-5 h-5 text-gray-700" />
                        <span className="font-medium text-gray-900">Credit / Debit Card</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 border border-gray-200 bg-white rounded-lg opacity-60 cursor-not-allowed">
                        <div className="w-5 h-5 rounded-full border border-gray-300" />
                        <span className="font-medium text-gray-900">UPI / Net Banking (Coming Soon)</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Lock className="w-3 h-3" />
                Payments are secured and encrypted.
            </div>

            {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {error}
                </div>
            )}

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} size="lg" disabled={loading} className="px-8">
                    Back
                </Button>
                <Button
                    onClick={handlePayment}
                    disabled={loading}
                    size="lg"
                    className="px-8 w-full md:w-auto bg-gradient-brand"
                >
                    {loading ? "Processing..." : `Pay ₹${state.totalPrice.toLocaleString()}`}
                </Button>
            </div>
        </div>
    );
}
