import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Calendar, Users, MapPin, Star, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import TripGallery from "@/components/trips/TripGallery";
import TripClient from "./TripClient";
import MobileBookingBar from "@/components/trips/MobileBookingBar";
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
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-3xl font-bold text-gray-900">${trip.price}</span>
                                <span className="text-gray-500 mb-1">/ person</span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Calendar className="w-5 h-5 text-gray-400" />
                                        <span className="font-semibold text-gray-900">Select Dates</span>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-8">Check availability</p>
                                </div>
                                <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span className="font-semibold text-gray-900">Guests</span>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-8">2 Adults</p>
                                </div>
                            </div>

                            <Link href={`/booking?tripId=${trip.id}`}>
                                <Button className="w-full py-4 text-lg rounded-xl mb-4">
                                    Book This Trip
                                </Button>
                            </Link>

                            <p className="text-center text-sm text-gray-500 mb-6">
                                You won't be charged yet
                            </p>

                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Best Price Guarantee</span>
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Free Cancellation</span>
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">24/7 Support</span>
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
