"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { createCircle } from "@/app/actions/circles";

export default function CreateCirclePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const result = await createCircle(formData);

        if (result.error) {
            setError(result.error);
            setLoading(false);
        } else {
            router.push("/circles");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Create a Circle</h1>
                    <p className="text-gray-500 mt-2">Start a group for your next adventure</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Circle Name"
                        name="name"
                        type="text"
                        placeholder="e.g., Weekend Hikers"
                        required
                    />
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="What is this circle about?"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full" isLoading={loading}>
                        Create Circle
                    </Button>
                </form>
            </Card>
        </div>
    );
}
