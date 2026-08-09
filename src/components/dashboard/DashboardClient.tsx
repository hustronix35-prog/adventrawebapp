"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { User, Map, CreditCard, Settings, LogOut, Save, Bell, Shield, Wallet, Gift } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { updateProfile } from "@/app/actions/user";
import { toast } from "react-hot-toast";

type DashboardClientProps = {
    user: any;
};

export default function DashboardClient({ user }: DashboardClientProps) {
    const [activeTab, setActiveTab] = useState("bookings");
    const [isLoading, setIsLoading] = useState(false);

    const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const result = await updateProfile(formData);
        setIsLoading(false);

        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success("Profile updated successfully");
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case "bookings":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Adventures</h2>
                        {user.bookings.length === 0 ? (
                            <Card className="p-8 text-center border-dashed border-2 border-gray-200 bg-transparent shadow-none">
                                <p className="text-gray-500 mb-4">You haven't booked any trips yet. Your adventure awaits!</p>
                                <Link href="/trips">
                                    <Button>Explore Trips</Button>
                                </Link>
                            </Card>
                        ) : (
                            user.bookings.map((booking: any) => (
                                <Card key={booking.id} className="p-6 flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                        <img
                                            src={booking.trip.image || "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                                            alt={booking.trip.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{booking.trip.title}</h3>
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{booking.status}</span>
                                            </div>
                                            <p className="text-gray-500 mb-4">
                                                {new Date(booking.date).toLocaleDateString()} • {booking.guests} Guests • ${booking.totalPrice}
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <Button size="sm" variant="outline">View Itinerary</Button>
                                            <Button size="sm" variant="outline">Download Tickets</Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                );
            case "profile":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                        <Card className="p-8">
                            <form onSubmit={handleProfileUpdate} className="space-y-6 max-w-md">
                                <Input
                                    label="Full Name"
                                    name="name"
                                    defaultValue={user.name}
                                    placeholder="Your Name"
                                />
                                <Input
                                    label="Email Address"
                                    name="email"
                                    defaultValue={user.email}
                                    placeholder="your@email.com"
                                    type="email"
                                />
                                <Button type="submit" isLoading={isLoading}>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </Button>
                            </form>
                        </Card>
                    </div>
                );
            case "wallet":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Wallet & Rewards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="p-6 bg-gradient-to-br from-primary to-orange-600 text-white border-none">
                                <div className="flex justify-between items-start mb-8">
                                    <Wallet className="w-8 h-8 opacity-80" />
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Gold Member</span>
                                </div>
                                <div>
                                    <p className="text-white/80 text-sm mb-1">Available Balance</p>
                                    <h3 className="text-3xl font-bold">2,450 pts</h3>
                                    <p className="text-white/60 text-xs mt-2">≈ $24.50 USD</p>
                                </div>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Gift className="w-5 h-5 mr-2 text-primary" />
                                    Referral Program
                                </h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    Invite friends to Adventra and earn 500 points for every successful booking.
                                </p>
                                <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                                    <code className="text-sm font-mono text-gray-700">ADV-SPANDAN-2024</code>
                                    <button className="text-primary text-sm font-bold hover:underline" onClick={() => toast.success("Copied to clipboard!")}>Copy</button>
                                </div>
                            </Card>
                        </div>
                        <h3 className="font-bold text-gray-900 mt-8 mb-4">Recent Transactions</h3>
                        <Card className="divide-y divide-gray-100">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-900">Trip Booking Reward</p>
                                        <p className="text-xs text-gray-500">Nov {10 + i}, 2024</p>
                                    </div>
                                    <span className="text-green-600 font-bold">+150 pts</span>
                                </div>
                            ))}
                        </Card>
                    </div>
                );
            case "preferences":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h2>
                        <Card className="divide-y divide-gray-100">
                            <div className="p-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Bell className="w-5 h-5 text-gray-400 mr-4" />
                                    <div>
                                        <p className="font-medium text-gray-900">Email Notifications</p>
                                        <p className="text-sm text-gray-500">Receive updates about your trips and offers</p>
                                    </div>
                                </div>
                                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-primary">
                                    <span className="absolute left-6 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-sm"></span>
                                </div>
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Shield className="w-5 h-5 text-gray-400 mr-4" />
                                    <div>
                                        <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                                    </div>
                                </div>
                                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-gray-200">
                                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-sm"></span>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
                <Card className="p-6 sticky top-24">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                            <img
                                src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                    </div>

                    <nav className="space-y-2">
                        <button
                            onClick={() => setActiveTab("bookings")}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "bookings" ? "bg-primary text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <Map className="w-5 h-5 mr-3" />
                            <span className="font-medium">My Bookings</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "profile" ? "bg-primary text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <User className="w-5 h-5 mr-3" />
                            <span className="font-medium">Profile Settings</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("wallet")}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "wallet" ? "bg-primary text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <CreditCard className="w-5 h-5 mr-3" />
                            <span className="font-medium">Wallet & Rewards</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("preferences")}
                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "preferences" ? "bg-primary text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <Settings className="w-5 h-5 mr-3" />
                            <span className="font-medium">Preferences</span>
                        </button>

                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors mt-8"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </nav>
                </Card>
            </div>

            {/* Content Area */}
            <div className="md:w-3/4">
                {renderContent()}
            </div>
        </div>
    );
}
