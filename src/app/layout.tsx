import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextAuthSessionProvider from "@/components/providers/SessionProvider";
import AOSProvider from "@/components/providers/AOSProvider";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Adventra | Discover Your Next Adventure",
  description: "Premium adventure travel booking platform for curated trekking and outdoor experiences.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning={true}>
        <NextAuthSessionProvider>
          <AOSProvider>
            <Navbar />
            <main className="min-h-screen md:pb-0">{children}</main>
            <Footer />
            <Toaster position="top-center" />
          </AOSProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
