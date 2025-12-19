import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-6 block">
                            <img
                                src="/logo-new.png"
                                alt="Adventra"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Curating the world's most extraordinary adventure travel experiences. Discover the unseen.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    icon: Instagram,
                                    name: "Instagram",
                                    href: "https://www.instagram.com/adventure_traveller24/"
                                },
                                {
                                    icon: Facebook,
                                    name: "Facebook",
                                    href: "https://www.facebook.com/people/Adventra/61570213470468/"
                                },
                                {
                                    icon: Linkedin,
                                    name: "LinkedIn",
                                    href: "https://www.linkedin.com/company/adventra-technologies-private-limited/"
                                },
                                {
                                    icon: (props: any) => (
                                        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                    name: "X",
                                    href: "https://x.com/adventra24"
                                },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Careers", href: "/careers" },
                                { name: "Blog", href: "/blog" },
                                { name: "Press", href: "/press" },
                                { name: "Partners", href: "/partners" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                { name: "Contact Us", href: "/contact" },
                                { name: "Terms & Conditions", href: "/terms" },
                                { name: "Privacy Policy", href: "/privacy" },
                                { name: "Cancellation Policy", href: "/cancellation-policy" },
                                { name: "FAQs", href: "/faqs" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get special offers and adventure inspiration.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                aria-label="Subscribe"
                                className="absolute right-1 top-1 bg-primary p-2 rounded-full hover:bg-primary/90 transition-colors"
                            >
                                <Mail className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Adventra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
