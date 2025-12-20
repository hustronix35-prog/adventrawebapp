"use client";

import { Check, User, Calendar, CreditCard, ShieldCheck } from "lucide-react";

interface BookingProgressProps {
    currentStep: number;
    totalSteps: number;
}

export default function BookingProgress({ currentStep, totalSteps }: BookingProgressProps) {
    const steps = [
        { id: 1, label: "Date & Guests", icon: Calendar },
        { id: 2, label: "Details", icon: User },
        { id: 3, label: "Review", icon: ShieldCheck },
        { id: 4, label: "Payment", icon: CreditCard },
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-between relative">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full" />

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />

                {steps.map((step) => {
                    const Icon = step.icon;
                    const isActive = step.id <= currentStep;
                    const isCompleted = step.id < currentStep;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <div
                                className={`
                                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                                    ${isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                                        : "bg-white text-gray-400 border border-gray-200"
                                    }
                                `}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                            </div>
                            <span
                                className={`
                                    text-xs font-semibold uppercase tracking-wider transition-colors duration-300
                                    ${isActive ? "text-primary" : "text-gray-400"}
                                `}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
