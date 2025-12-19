'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TripTabsProps {
    overview: React.ReactNode;
    route: React.ReactNode;
    itinerary: React.ReactNode;
    requirements: React.ReactNode;
    placesOfInterest: React.ReactNode;
}

export default function TripTabs({ overview, route, itinerary, requirements, placesOfInterest }: TripTabsProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'route' | 'itinerary' | 'requirements' | 'places'>('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'route', label: 'Route' },
        { id: 'itinerary', label: 'Itinerary' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'places', label: 'Places of Interest' },
    ] as const;

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            activeTab === tab.id
                                ? "bg-primary text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="min-h-[400px]">
                {activeTab === 'overview' && overview}
                {activeTab === 'route' && route}
                {activeTab === 'itinerary' && itinerary}
                {activeTab === 'requirements' && requirements}
                {activeTab === 'places' && placesOfInterest}
            </div>
        </div>
    );
}
