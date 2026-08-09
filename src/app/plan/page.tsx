"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { createCustomTrip } from "../actions/trips";

export default function PlanTripPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const result = await createCustomTrip(formData);

        if (result.error) {
            setError(result.error);
            setLoading(false);
        } else {
            router.push("/dashboard");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Plan Your Own Trip</h1>
                    <p className="text-gray-500 mt-2">Design your perfect adventure from scratch</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Trip Title"
                            name="title"
                            type="text"
                            placeholder="e.g., Himalayan Expedition"
                            required
                        />
                        <Input
                            label="Location"
                            name="location"
                            type="text"
                            placeholder="e.g., Nepal"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="Describe your trip..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input
                            label="Duration (e.g., 5 Days)"
                            name="duration"
                            type="text"
                            placeholder="5 Days"
                            required
                        />
                        <Input
                            label="Duration (Days)"
                            name="durationDays"
                            type="number"
                            placeholder="5"
                            required
                        />
                        <div className="space-y-1">
                            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
                            <select
                                id="difficulty"
                                name="difficulty"
                                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            >
                                <option value="Easy">Easy</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Hard">Hard</option>
                                <option value="Extreme">Extreme</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Estimated Price ($)"
                            name="price"
                            type="number"
                            placeholder="1000"
                            required
                        />
                        <Input
                            label="Image URL (Optional)"
                            name="image"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                        Create Trip
                    </Button>
                </form>
            </Card>
        </div>
    );
}
