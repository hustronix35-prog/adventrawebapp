"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { registerUser } from "@/app/actions/auth";

import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const result = await registerUser(formData);

        if (result.error) {
            setError(result.error);
            toast.error(result.error);
            setLoading(false);
        } else {
            toast.success("Account created successfully! Please sign in.");
            router.push("/login?registered=true");
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                    <p className="text-gray-500 mt-2">Join Adventra for exclusive trips</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        minLength={6}
                    />

                    <Button type="submit" className="w-full" isLoading={loading}>
                        Sign Up
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-semibold hover:underline">
                        Sign in
                    </Link>
                </div>
            </Card>
        </div>
    );
}
