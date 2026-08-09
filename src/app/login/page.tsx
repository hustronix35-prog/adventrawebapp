"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

import { toast } from "react-hot-toast";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
                toast.error("Invalid email or password");
            } else {
                toast.success("Successfully logged in!");
                router.push(callbackUrl);
                router.refresh();
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-500 mt-2">Sign in to your Adventra account</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                    />

                    <Button type="submit" className="w-full" isLoading={loading}>
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-primary font-semibold hover:underline">
                        Sign up
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
