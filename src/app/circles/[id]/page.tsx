import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Users, Calendar, MapPin, UserPlus, UserMinus } from "lucide-react";
import { joinCircle, leaveCircle } from "@/app/actions/circles";
import CircleChat from "@/components/circles/CircleChat";

export default async function CircleDetailsPage({ params }: { params: { id: string } }) {
    let session;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        // @ts-ignore
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.error("Session error:", error);
        redirect("/api/auth/signout");
    }

    const { id } = await params;

    if (!session || !session.user) {
        redirect("/login");
    }

    // @ts-ignore - Prisma client needs regeneration
    const circle = await prisma.circle.findUnique({
        where: { id },
        include: {
            owner: true,
            members: {
                include: {
                    user: true,
                },
            },
            trips: {
                include: {
                    creator: true,
                },
            },
        },
    });

    if (!circle) {
        notFound();
    }

    const isMember = circle.members.some((member: any) => member.userId === session.user.id);
    const isOwner = circle.ownerId === session.user.id;

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{circle.name}</h1>
                                {isOwner && (
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                                        Owner
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-500 max-w-2xl">{circle.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {!isOwner && (
                                <form action={async () => {
                                    "use server";
                                    if (isMember) {
                                        await leaveCircle(circle.id);
                                    } else {
                                        await joinCircle(circle.id);
                                    }
                                }}>
                                    <Button variant={isMember ? "outline" : "primary"}>
                                        {isMember ? (
                                            <>
                                                <UserMinus className="w-4 h-4 mr-2" />
                                                Leave Circle
                                            </>
                                        ) : (
                                            <>
                                                <UserPlus className="w-4 h-4 mr-2" />
                                                Join Circle
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
                        <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {circle.members.length} Members
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Created {new Date(circle.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 mr-2">
                                {circle.owner.name?.[0] || "U"}
                            </div>
                            Owned by {circle.owner.name}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Trips */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">Circle Trips</h2>
                            {isMember && (
                                <Link href={`/plan?circleId=${circle.id}`}>
                                    <Button size="sm" variant="outline">Plan Trip</Button>
                                </Link>
                            )}
                        </div>

                        {circle.trips.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {circle.trips.map((trip: any) => (
                                    <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="aspect-video relative bg-gray-200">
                                            {trip.image && (
                                                <img
                                                    src={trip.image}
                                                    alt={trip.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-1">{trip.title}</h3>
                                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {trip.location}
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <span className="font-bold text-primary">${trip.price}</span>
                                                <Link href={`/trips/${trip.id}`}>
                                                    <Button size="sm" variant="outline">View</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-gray-300">
                                <p className="text-gray-500 mb-4">No trips planned yet.</p>
                                {isMember && (
                                    <Link href={`/plan?circleId=${circle.id}`}>
                                        <Button>Plan the First Trip</Button>
                                    </Link>
                                )}
                            </div>
                        )}

                        {/* Chat Section */}
                        {isMember && (
                            <div className="mt-8">
                                <CircleChat circleId={circle.id} />
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Members */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Members</h2>
                            <div className="space-y-4">
                                {circle.members.map((member: any) => (
                                    <div key={member.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                                                {member.user.name?.[0] || "U"}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{member.user.name}</p>
                                                <p className="text-xs text-gray-500">Joined {new Date(member.joinedAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        {member.userId === circle.ownerId && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Owner</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
