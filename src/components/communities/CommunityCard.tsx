"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Loader2, MessageCircle } from "lucide-react";
import { Community } from "@/types"; // We might need to define this or import it if shared

interface CommunityCardProps {
    community: {
        id: string;
        name: string;
        description: string;
        image: string | null;
        memberCount: number;
        isMember: boolean;
    };
    onJoin: (id: string) => Promise<void>;
    onLeave: (id: string) => Promise<void>;
    isLoading: boolean;
}

export default function CommunityCard({ community, onJoin, onLeave, isLoading }: CommunityCardProps) {
    const [imageSrc, setImageSrc] = useState(
        community.image || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
    );

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
                <img
                    src={imageSrc}
                    alt={community.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageSrc("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{community.name}</h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                        <Users className="w-4 h-4" />
                        <span>{community.memberCount} members</span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-2">{community.description}</p>
                <div className="flex gap-3">
                    {community.isMember && (
                        <Link
                            href={`/circles/${community.id}`}
                            className="flex-1 bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat
                        </Link>
                    )}
                    <button
                        onClick={() => (community.isMember ? onLeave(community.id) : onJoin(community.id))}
                        disabled={isLoading}
                        className={`py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${community.isMember
                                ? "bg-gray-100 text-gray-700 hover:bg-gray-200 px-4"
                                : "w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                            }`}
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : community.isMember ? (
                            "Leave"
                        ) : (
                            "Join Community"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
