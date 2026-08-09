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
                        src="/horizon-logo.png"
                        alt="Horizon Treks"
                        className={`h-12 w-auto object-contain transition-all duration-300 ${isSolid ? "" : ""}`}
                        suppressHydrationWarning
                    />
                    <span className={`text-xl font-bold transition-all duration-300 ${isSolid ? "text-slate-800" : "text-white"}`}>
                        Horizon Treks
                    </span>
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
                    aria-label="Toggle mobile menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isSolid ? "text-gray-800" : "text-white"} />
                    ) : (
                        <Menu className={isSolid ? "text-gray-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-10">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close mobile menu"
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-grow gap-8">
                            {["Destinations", "Trips", "Community", "About", "Contact"].map((item, index) => (
                                <Link
                                    key={item}
                                    href={item === "Community" ? "/communities" : `/${item.toLowerCase()}`}
                                    className="text-4xl font-bold text-gray-900 tracking-tight hover:text-primary transition-colors text-center"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}

                            {session ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="text-2xl font-medium text-gray-600 hover:text-primary transition-colors mt-4"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        My Dashboard
                                    </Link>
                                    <button
                                        onClick={() => {
                                            signOut({ callbackUrl: '/' });
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-xl font-medium text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="text-2xl font-medium text-gray-600 hover:text-primary transition-colors mt-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>

                        <div className="mt-auto pt-8">
                            <Link
                                href="/trips"
                                className="w-full block bg-primary text-white text-center py-4 rounded-2xl text-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Your Adventure
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
