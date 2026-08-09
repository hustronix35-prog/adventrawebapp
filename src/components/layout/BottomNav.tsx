"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Users, User } from "lucide-react";
import { useSession } from "next-auth/react";

export default function BottomNav() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Trips", href: "/trips", icon: Compass },
        { name: "Community", href: "/circles", icon: Users },
        ...(session ? [
            { name: "Profile", href: "/dashboard", icon: User },
        ] : []),
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 px-6 z-50 flex justify-between items-center safe-area-bottom">
            {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                            }`}
                        aria-label={item.name}
                    >
                        <Icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}
