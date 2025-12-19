'use client';

import { useState } from 'react';
import TripTabs from '@/components/trips/TripTabs';
import TripOverview from '@/components/trips/TripOverview';
import TripInclusions from '@/components/trips/TripInclusions';
import PlacesOfInterest from '@/components/trips/PlacesOfInterest';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

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

    return (
        <div>
            {/* Trip Info Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{trip.title}</h2>
                <p className="text-gray-500 text-sm mb-4">
                    {trip.duration} • {trip.location}
                </p>

                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                        {/* Placeholder for organizer avatar */}
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">TW</div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">The Wild - Explore Nature</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {trip.durationDays - 1}N/{trip.durationDays}D
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        15 slots available
                    </span>
                </div>

                <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                    <span className="px-4 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 whitespace-nowrap">
                        Trekking
                    </span>
                    <span className="px-4 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 whitespace-nowrap">
                        Weekend
                    </span>
                </div>
            </div>

            <TripTabs
                tabs={['Overview', 'Route', 'Itinerary', 'Requirements']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className="min-h-[400px]">
                {activeTab === 'Overview' && (
                    <div className="space-y-8">
                        <div className="prose prose-sm max-w-none text-gray-600">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Trip Summary</h3>
                            <p>{trip.description}</p>
                        </div>

                        <TripOverview
                            description="" // Already shown above
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
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Route Map</h3>
                        {trip.routeImage ? (
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image
                                    src={trip.routeImage}
                                    alt="Route Map"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-[300px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                                Map not available
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'Itinerary' && (
                    <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
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
                    <div className="prose prose-sm max-w-none text-gray-600">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
                        {requirements ? (
                            <p>{requirements}</p>
                        ) : (
                            <p>No specific requirements listed for this trip.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
