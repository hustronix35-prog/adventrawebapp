"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Horizon Treks</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Discover the unseen. Horizon Treks brings you closer to nature with curated expeditions and unparalleled adventure.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/trips" className="hover:text-white transition-colors">All Trips</Link></li>
                        <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Travel Stories</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                        <li><Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>
                                Adventra Technologies Pvt Ltd<br />
                                Flat no. 102, Pride Regalia Apts,<br />
                                Hulimavu, Bannerghatta Road,<br />
                                Bangalore - 560076
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>help@adventra.tech</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Adventra Inc. All rights reserved.
            </div>
        </footer>
    );
}
