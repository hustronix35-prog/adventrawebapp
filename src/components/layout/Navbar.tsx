"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Use solid style if scrolled OR if not on the homepage
    const isSolid = isScrolled || !isHome;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSolid ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo-new.png"
                        alt="Adventra"
                        className={`h-12 w-auto object-contain transition-all duration-300 ${isSolid ? "brightness-0" : ""}`}
                        suppressHydrationWarning
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Destinations", "Trips", "Community", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Community" ? "/communities" : `/${item.toLowerCase()}`}
                            className={`font-medium transition-colors hover:text-primary ${isSolid ? "text-gray-700" : "text-white/90"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {session ? (
                        <div className="relative group">
                            <button
                                aria-label="User menu"
                                className="p-2 rounded-full hover:bg-black/5 transition-colors flex items-center gap-2"
                            >
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-white/20">
                                    {session.user?.image ? (
                                        <img src={session.user.image} alt={session.user.name || 'User'} className="w-full h-full object-cover" suppressHydrationWarning />
                                    ) : (
                                        <User className={`w-5 h-5 ${isSolid ? "text-gray-700" : "text-white"}`} />
                                    )}
                                </div>
                            </button>

                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                                <div className="px-4 py-2 border-b border-gray-50">
                                    <p className="text-sm font-semibold text-gray-900 truncate">{session.user?.name || 'User'}</p>
                                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                                </div>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    My Dashboard
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: '/' })}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className={`font-medium transition-colors hover:text-primary ${isSolid ? "text-gray-700" : "text-white/90"
                                }`}
                        >
                            Sign In
                        </Link>
                    )}

                    <Link
                        href="/trips"
                        className={`px-5 py-2 rounded-full font-semibold transition-all ${isSolid
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                            }`}
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isSolid ? "text-gray-800" : "text-white"} />
                    ) : (
                        <Menu className={isSolid ? "text-gray-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {["Destinations", "Trips", "Community", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Community" ? "/communities" : `/${item.toLowerCase()}`}
                            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    {session ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                My Dashboard
                            </Link>
                            <button
                                onClick={() => {
                                    // Explicitly redirect to Home using absolute URL
                                    signOut({ callbackUrl: '/' });
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-lg font-medium text-red-600 py-2 border-b border-gray-100 text-left w-full"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    )}
                    <Link
                        href="/trips"
                        className="w-full text-center bg-primary text-white py-3 rounded-full font-semibold mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            )}
        </header>
    );
}
