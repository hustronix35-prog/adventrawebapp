"use client";

import { useState } from "react";
import { Grid, ImageIcon } from "lucide-react";
import Modal from "@/components/ui/Modal";

interface TripGalleryProps {
    images: string[];
    title: string;
}

export default function TripGallery({ images, title }: TripGalleryProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ensure we have at least 4 images for the grid, filling with placeholders if needed
    const displayImages = [...images];
    while (displayImages.length < 4) {
        displayImages.push("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80");
    }

    return (
        <>
            <div className="h-[50vh] md:h-[60vh] relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-3xl overflow-hidden">
                <div className="md:col-span-2 md:row-span-2 relative h-full">
                    <img
                        src={displayImages[0]}
                        alt={`${title} main`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                </div>
                <div className="hidden md:block md:col-span-1 md:row-span-1 relative h-full">
                    <img
                        src={displayImages[1]}
                        alt={`${title} 2`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                </div>
                <div className="hidden md:block md:col-span-1 md:row-span-1 relative h-full">
                    <img
                        src={displayImages[2]}
                        alt={`${title} 3`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                </div>
                <div className="hidden md:block md:col-span-1 md:row-span-1 relative h-full">
                    <img
                        src={displayImages[3]}
                        alt={`${title} 4`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                </div>
                <div className="hidden md:block md:col-span-1 md:row-span-1 relative h-full">
                    <img
                        src={displayImages[0]} // Reusing first image as placeholder for 5th slot if needed
                        alt={`${title} 5`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 text-white font-semibold hover:bg-black/50 transition-colors group"
                    >
                        <Grid className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View All Photos
                    </button>
                </div>

                {/* Mobile View All Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="md:hidden absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
                >
                    <ImageIcon className="w-4 h-4" />
                    View Photos
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-4">
                    <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {displayImages.map((img, idx) => (
                            <div key={idx} className="aspect-video rounded-xl overflow-hidden">
                                <img
                                    src={img}
                                    alt={`${title} gallery ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    suppressHydrationWarning
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
}
