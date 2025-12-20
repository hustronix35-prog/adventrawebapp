'use client';

import { useState } from 'react';
import BookingWizard from "@/components/booking/flow/BookingWizard";
import TripOverview from '@/components/trips/TripOverview';
import TripInclusions from '@/components/trips/TripInclusions';
import PlacesOfInterest from '@/components/trips/PlacesOfInterest';
import Image from 'next/image';
import { ShieldCheck } from "lucide-react";

interface TripClientProps {
    trip: any;
    highlights: any[];
    itinerary: any[];
    inclusions: string[];
    exclusions: string[];
    placesOfInterest: any[];
    requirements: string | null;
}

export default function TripClient({
    trip,
    highlights,
    itinerary,
    inclusions,
    exclusions,
    placesOfInterest,
    requirements
}: TripClientProps) {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Route', 'Itinerary', 'Requirements'];

    return (
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Left Content Column */}
            <div className="lg:w-2/3">
                {/* Header Info */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-3xl font-bold text-gray-900">{trip.title}</h1>
                        <div title="Verified Trip" className="text-blue-500">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span>{trip.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{trip.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {trip.durationDays - 1}N/{trip.durationDays}D
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            {trip.difficulty}
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-4 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === tab
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'Overview' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div className="prose prose-sm max-w-none text-gray-600">
                                <p>{trip.description}</p>
                            </div>
                            <TripOverview
                                description=""
                                highlights={highlights}
                                bestTime={trip.bestTime}
                                tripType={trip.tripType}
                                summitHeight={trip.summitHeight}
                                region={trip.region}
                                inclusions={inclusions}
                                exclusions={exclusions}
                            />
                            <PlacesOfInterest places={placesOfInterest} />
                            <TripInclusions inclusions={inclusions} exclusions={exclusions} />
                        </div>
                    )}

                    {activeTab === 'Route' && (
                        <div className="animate-in fade-in duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Route Map</h3>
                            {trip.routeImage ? (
                                <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={trip.routeImage}
                                        alt="Route Map"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-[300px] bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200">
                                    Map not available
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'Itinerary' && (
                        <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-gray-200 animate-in fade-in duration-300">
                            {itinerary.map((day: any, index: number) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-primary text-sm z-10">
                                        {day.day}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h3>
                                    <p className="text-gray-600 text-sm">{day.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'Requirements' && (
                        <div className="prose prose-sm max-w-none text-gray-600 animate-in fade-in duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
                            {requirements ? (
                                <p>{requirements}</p>
                            ) : (
                                <p>No specific requirements listed.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Booking Column */}
            <div className="lg:w-1/3">
                <div className="sticky top-24">
                    <BookingWizard trip={trip} />
                </div>
            </div>
        </div>
    );
}
