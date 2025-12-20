"use client";

import { useState } from "react";
import { Trip } from "@prisma/client";
import { useSession } from "next-auth/react";
import BookingProgress from "@/components/booking/flow/BookingProgress";
import DateSelection from "./steps/DateSelection";
import GuestDetails from "./steps/GuestDetails";
import ReviewBooking from "./steps/ReviewBooking";
import PaymentStep from "./steps/PaymentStep";
import SuccessStep from "./steps/Success";
import Card from "@/components/ui/Card";
import TrustBadge from "@/components/ui/TrustBadge";

interface BookingWizardProps {
    trip: Trip;
}

export interface BookingState {
    date: Date | null;
    guests: number;
    totalPrice: number;
    step: number;
}

export default function BookingWizard({ trip }: BookingWizardProps) {
    const { data: session } = useSession();
    const [bookingState, setBookingState] = useState<BookingState>({
        date: null,
        guests: 2,
        totalPrice: trip.price * 2, // Initial calculation
        step: 1
    });

    const updateState = (updates: Partial<BookingState>) => {
        setBookingState(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => updateState({ step: bookingState.step + 1 });
    const prevStep = () => updateState({ step: bookingState.step - 1 });

    return (
        <div className="flex flex-col gap-6">
            <BookingProgress currentStep={bookingState.step} totalSteps={5} />

            <div className="flex justify-center">
                <TrustBadge variant="verified-trip" className="w-fit" />
            </div>

            <Card className="p-6 min-h-[400px]">
                {bookingState.step === 1 && (
                    <DateSelection
                        trip={trip}
                        state={bookingState}
                        updateState={updateState}
                        onNext={nextStep}
                    />
                )}

                {bookingState.step === 2 && (
                    <GuestDetails
                        state={bookingState}
                        updateState={updateState}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}

                {bookingState.step === 3 && (
                    <ReviewBooking
                        trip={trip}
                        state={bookingState}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}

                {bookingState.step === 4 && (
                    <PaymentStep
                        trip={trip}
                        state={bookingState}
                        onBack={prevStep}
                        onComplete={() => updateState({ step: 5 })}
                    />
                )}

                {bookingState.step === 5 && (
                    <SuccessStep trip={trip} state={bookingState} />
                )}
            </Card>
        </div>
    );
}
