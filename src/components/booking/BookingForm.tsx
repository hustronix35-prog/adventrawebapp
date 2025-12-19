"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Calendar, Users, CreditCard, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { createBooking } from "@/app/actions/booking";
import { Trip } from "@prisma/client";

interface BookingFormProps {
    trip: Trip;
}

export default function BookingForm({ trip }: BookingFormProps) {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Booking State
    const [guests, setGuests] = useState(2);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const calculateTotal = () => {
        return (trip.price * guests) + 150; // Base price * guests + $150 fees
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            return;
        }

        setLoading(true);
        const formData = new FormData(e.currentTarget);

        // Add calculated/system data
        formData.append("tripId", trip.id);
        formData.append("guests", guests.toString());
        formData.append("date", date);
        // We send total price for reference, but backend should re-calculate to verify
        // The current server action expects it, so we send it.
        formData.append("totalPrice", calculateTotal().toString());

        const result = await createBooking(formData);

        if (result.success) {
            setCurrentStep(4);
        } else {
            alert(result.error || "Booking failed");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Main Booking Form */}
            <div className="lg:w-2/3">
                {/* Steps */}
                <div className="flex items-center justify-between mb-10 relative">
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full" />
                    <div className="absolute left-0 top-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%` }} />

                    {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex flex-col items-center gap-2 bg-gray-50 px-2 lg:px-4">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ring-4 ${step <= currentStep
                                    ? "bg-primary text-white ring-primary/20 scale-110 shadow-lg shadow-primary/30"
                                    : "bg-white text-gray-400 ring-transparent border border-gray-200"
                                    }`}
                            >
                                {step < currentStep ? <CheckCircle2 className="w-6 h-6" /> : step}
                            </div>
                            <span className={`text-xs font-semibold uppercase tracking-wider ${step <= currentStep ? "text-primary" : "text-gray-400"}`}>
                                {step === 1 && "Trip"}
                                {step === 2 && "Guests"}
                                {step === 3 && "Payment"}
                                {step === 4 && "Confirm"}
                            </span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="min-h-[400px]">
                    {/* Step 1: Trip Details */}
                    {currentStep === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Trip Details</h2>
                                <p className="text-gray-500">Select your preferred dates and group size.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-8 border border-gray-100">
                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide">Select Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
                                        <input
                                            type="date"
                                            required
                                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-gray-900 hover:bg-white"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide">Number of Guests</label>
                                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">Adults (Age 12+)</span>
                                        </div>
                                        <div className="flex items-center gap-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                                            <button
                                                type="button"
                                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors text-xl font-medium"
                                            >
                                                -
                                            </button>
                                            <span className="text-xl font-bold w-6 text-center text-gray-900">{guests}</span>
                                            <button
                                                type="button"
                                                onClick={() => setGuests(Math.min(10, guests + 1))}
                                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors text-xl font-medium"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button type="button" className="w-full py-5 text-lg rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1" onClick={() => setCurrentStep(2)}>
                                Continue to Guest Info
                            </Button>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Guest Information</h2>
                                <p className="text-gray-500">Enter the contact details for the lead traveler.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-6 border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="First Name" name="firstName" placeholder="John" required className="py-3" />
                                    <Input label="Last Name" name="lastName" placeholder="Doe" required className="py-3" />
                                </div>
                                <Input label="Email Address" type="email" name="email" placeholder="john@example.com" required className="py-3" />
                                <Input label="Phone Number" type="tel" name="phone" placeholder="+1 (555) 000-0000" required className="py-3" />
                            </div>

                            <div className="flex gap-4">
                                <Button type="button" variant="outline" className="w-1/3 py-5 rounded-2xl border-2 text-gray-600 font-bold hover:bg-gray-50" onClick={() => setCurrentStep(1)}>Back</Button>
                                <Button type="submit" className="w-2/3 py-5 text-lg rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">Continue to Payment</Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Details</h2>
                                <p className="text-gray-500">Complete your secure payment to confirm booking.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-6 border border-gray-100">
                                <div className="p-4 bg-blue-50/50 text-blue-800 rounded-xl flex items-start gap-3 text-sm border border-blue-100">
                                    <ShieldCheck className="w-5 h-5 flex-shrink-0 text-blue-600" />
                                    <p>Your payment is secure. We use 256-bit SSL encryption to protect your data.</p>
                                </div>
                                <Input label="Card Number" placeholder="0000 0000 0000 0000" icon={<CreditCard className="w-5 h-5 text-gray-400" />} required className="py-3" />
                                <div className="grid grid-cols-2 gap-6">
                                    <Input label="Expiry Date" placeholder="MM/YY" required className="py-3" />
                                    <Input label="CVC" placeholder="123" required className="py-3" />
                                </div>
                                <Input label="Cardholder Name" placeholder="John Doe" required className="py-3" />
                            </div>

                            <div className="flex gap-4">
                                <Button type="button" variant="outline" className="w-1/3 py-5 rounded-2xl border-2 text-gray-600 font-bold hover:bg-gray-50" onClick={() => setCurrentStep(2)}>Back</Button>
                                <Button type="submit" className="w-2/3 py-5 text-lg rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1" isLoading={loading}>
                                    Confirm Booking & Pay
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="text-center py-16 animate-in zoom-in-95 duration-500">
                            <div className="w-32 h-32 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-8 ring-green-50">
                                <CheckCircle2 className="w-16 h-16 text-green-600 drop-shadow-sm" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Booking Confirmed!</h2>
                            <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                                Thank you for booking with Adventra. A confirmation email has been sent to your inbox.
                            </p>
                            <Button onClick={() => router.push("/dashboard")} className="px-10 py-4 rounded-full text-lg shadow-xl shadow-green-200 hover:shadow-2xl transition-all hover:-translate-y-1 bg-green-600 hover:bg-green-700">
                                Go to Dashboard
                            </Button>
                        </div>
                    )}
                </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:w-1/3">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 sticky top-28 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>Order Summary</span>
                        <div className="h-1 flex-1 bg-gray-100 rounded-full ml-4"></div>
                    </h3>

                    <div className="mb-8 group cursor-pointer">
                        <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-all relative">
                            <img
                                src={trip.image || "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt={trip.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                                {trip.durationDays} Days
                            </div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1 group-hover:text-primary transition-colors">{trip.title}</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            {trip.location}
                        </p>
                    </div>

                    <div className="space-y-4 text-sm bg-gray-50/80 p-6 rounded-2xl mb-6 border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Trip Price</span>
                            <span className="font-semibold text-gray-900">${trip.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Guests</span>
                            <span className="font-semibold text-gray-900">x {guests}</span>
                        </div>
                        <div className="h-px bg-gray-200 w-full my-2"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-semibold text-gray-900">${(trip.price * guests).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 group relative cursor-help">
                                Taxes & Fees
                            </span>
                            <span className="font-medium text-gray-900">$150.00</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <span className="font-bold text-gray-900 text-lg">Total</span>
                        <div className="text-right">
                            <span className="block text-3xl font-extrabold text-primary">${calculateTotal().toLocaleString()}</span>
                            <span className="text-xs text-gray-400 font-medium">USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
