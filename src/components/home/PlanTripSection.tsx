"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { Compass, Map } from "lucide-react";

export default function PlanTripSection() {
    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
                            <Compass className="w-4 h-4 mr-2 text-primary" />
                            <span>Custom Adventures</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Plan Your Dream <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Itinerary</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-xl">
                            Don't see what you're looking for? Create a custom trip tailored to your preferences, schedule, and budget. Our experts will help you make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/plan">
                                <Button size="lg" className="rounded-full px-8" aria-label="Start planning your trip">
                                    Start Planning
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10" aria-label="Talk to an expert">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Planning 1"
                                className="rounded-2xl shadow-2xl translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Planning 2"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full" />
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
