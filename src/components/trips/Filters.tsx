"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, Check, X } from "lucide-react";
import Button from "../ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    // Initial state from URL or defaults
    const [priceRange, setPriceRange] = useState([
        0,
        searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : 5000
    ]);

    const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>(
        searchParams.get("difficulty") ? searchParams.get("difficulty")!.split(",") : []
    );

    const [selectedDuration, setSelectedDuration] = useState<string[]>(
        searchParams.get("duration") ? searchParams.get("duration")!.split(",") : []
    );

    const difficulties = ["Easy", "Moderate", "Challenging", "Difficult"];
    const durations = ["1-3 Days", "4-7 Days", "8-14 Days", "14+ Days"];

    const toggleDifficulty = (level: string) => {
        if (selectedDifficulty.includes(level)) {
            setSelectedDifficulty(selectedDifficulty.filter((d) => d !== level));
        } else {
            setSelectedDifficulty([...selectedDifficulty, level]);
        }
    };

    const toggleDuration = (duration: string) => {
        if (selectedDuration.includes(duration)) {
            setSelectedDuration(selectedDuration.filter((d) => d !== duration));
        } else {
            setSelectedDuration([...selectedDuration, duration]);
        }
    };

    const applyFilters = () => {
        const params = new URLSearchParams();

        if (priceRange[1] < 5000) {
            params.set("maxPrice", priceRange[1].toString());
        }

        if (selectedDifficulty.length > 0) {
            params.set("difficulty", selectedDifficulty.join(","));
        }

        if (selectedDuration.length > 0) {
            params.set("duration", selectedDuration.join(","));
        }

        router.push(`/trips?${params.toString()}`);
        setIsOpen(false); // Close mobile modal on apply
    };

    const resetFilters = () => {
        setPriceRange([0, 5000]);
        setSelectedDifficulty([]);
        setSelectedDuration([]);
        router.push("/trips");
        setIsOpen(false); // Close mobile modal on reset
    };

    return (
        <>
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
                <Button
                    onClick={() => setIsOpen(true)}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filter Trips
                </Button>
            </div>

            {/* Filter Content - Responsive Container */}
            <div className={`
                fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0 lg:bg-white lg:p-6 lg:rounded-2xl lg:shadow-sm lg:border lg:border-gray-100 lg:block lg:sticky lg:top-24
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <SlidersHorizontal className="w-5 h-5 mr-2" /> Filters
                    </h3>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={resetFilters}
                            className="text-sm text-primary font-medium hover:underline"
                        >
                            Reset
                        </button>
                        {/* Mobile Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden p-2 -mr-2 text-gray-500 hover:text-gray-700"
                            aria-label="Close filters"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>$0</span>
                        <span>${priceRange[1]}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[1]}
                        aria-label="Price range"
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                {/* Difficulty */}
                <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Difficulty</h4>
                    <div className="space-y-2">
                        {difficulties.map((level) => (
                            <label
                                key={level}
                                className="flex items-center cursor-pointer group"
                            >
                                <div
                                    className={`w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors ${selectedDifficulty.includes(level)
                                        ? "bg-primary border-primary"
                                        : "border-gray-300 group-hover:border-primary"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDifficulty(level);
                                    }}
                                >
                                    {selectedDifficulty.includes(level) && (
                                        <Check className="w-3 h-3 text-white" />
                                    )}
                                </div>
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {level}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Duration */}
                <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Duration</h4>
                    <div className="space-y-2">
                        {durations.map((duration) => (
                            <label key={duration} className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={selectedDuration.includes(duration)}
                                    onChange={() => toggleDuration(duration)}
                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary mr-3"
                                />
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {duration}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white pt-4 pb-2 lg:static lg:pt-0 lg:pb-0">
                    <Button onClick={applyFilters} className="w-full rounded-xl">Apply Filters</Button>
                </div>
            </div>

            {/* Mobile Overlay Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
