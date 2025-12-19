import { Star, Quote } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Testimonials() {
    const reviews = await prisma.review.findMany({
        where: {
            isFeatured: true
        },
        take: 3,
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                    location: true
                }
            }
        }
    });

    if (reviews.length === 0) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Stories from the Trail
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our community of adventurers about their unforgettable journeys with Adventra.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/10" />
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 italic leading-relaxed line-clamp-4">
                                "{review.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user.name || 'User')}&background=random`}
                                    alt={review.user.name || 'User'}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.user.name || 'Adventurer'}</h4>
                                    <p className="text-sm text-gray-500">{review.user.location || 'Explorer'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
