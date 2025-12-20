import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Calendar, Users, MapPin, Star, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import TripGallery from "@/components/trips/TripGallery";
import TripClient from "./TripClient";
import MobileBookingBar from "@/components/trips/MobileBookingBar";
import TripBookingSidebar from "@/components/trips/TripBookingSidebar";
import Image from "next/image";

export default async function TripDetailPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const trip = await prisma.trip.findUnique({
        where: { id: params.id },
    });

    if (!trip) {
        notFound();
    }

    const highlights = JSON.parse(trip.highlights ?? "[]");
    const itinerary = JSON.parse(trip.itinerary ?? "[]");
    const inclusions = JSON.parse(trip.inclusions ?? "[]");
    const exclusions = JSON.parse(trip.exclusions ?? "[]");
    const placesOfInterest = JSON.parse(trip.placesOfInterest ?? "[]");

    // Parse gallery images
    const galleryImages = JSON.parse(trip.gallery ?? "[]");
    const images = trip.image ? [trip.image, ...galleryImages] : galleryImages;

    return (
        <div className="bg-white min-h-screen pb-20 pt-24">
            <MobileBookingBar price={trip.price} tripId={trip.id} />
            <div className="container mx-auto px-4">
                {/* Breadcrumb & Header */}
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{trip.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {trip.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                            {trip.rating} ({trip.reviewCount} reviews)
                        </span>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                    <TripGallery images={images} title={trip.title} />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3 space-y-12">
                        <TripClient
                            trip={trip}
                            highlights={highlights}
                            itinerary={itinerary}
                            inclusions={inclusions}
                            exclusions={exclusions}
                            placesOfInterest={placesOfInterest}
                            requirements={trip.requirements}
                        />
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:w-1/3">
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">24/7 Support</span>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                </div>
            </div>
        </div>
                </div >
            </div >
        </div >
    );
}
