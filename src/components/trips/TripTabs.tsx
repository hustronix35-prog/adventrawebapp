"use client";

import { cn } from "@/lib/utils";

interface TripTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function TripTabs({
    tabs,
    activeTab,
    onTabChange,
}: TripTabsProps) {
    return (
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-1 mb-8">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all",
                        activeTab === tab
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
