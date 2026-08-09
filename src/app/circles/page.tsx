import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Users, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CirclesPage() {
    let session;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        console.error("Session error:", error);
        redirect("/api/auth/signout?callbackUrl=/circles");
    }

    if (!session || !session.user) {
        redirect("/login?callbackUrl=/circles");
    }

    // @ts-ignore - Prisma client needs regeneration
    const myCircles = await prisma.circle.findMany({
        where: {
            OR: [
                { ownerId: session.user.id },
                { members: { some: { userId: session.user.id } } },
            ],
        },
        include: {
            _count: {
                select: { members: true },
            },
        },
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">My Circles</h1>
                        <p className="text-gray-500 mt-1">Connect and plan adventures with your friends.</p>
                    </div>
                    <Link href="/circles/create">
                        <Button className="rounded-full">
                            <Plus className="w-5 h-5 mr-2" />
                            Create Circle
                        </Button>
                    </Link>
                </div>

                {myCircles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myCircles.map((circle: any) => (
                            <Card key={circle.id} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                        {circle.ownerId === session.user.id ? "Owner" : "Member"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{circle.name}</h3>
                                <p className="text-gray-500 mb-4 line-clamp-2">{circle.description}</p>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Users className="w-4 h-4 mr-1" />
                                    {circle._count.members} Members
                                </div>
                                <Link href={`/circles/${circle.id}`} className="block mt-4">
                                    <Button variant="outline" className="w-full">
                                        View Circle
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Circles Yet</h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            Create a circle to start planning trips with your friends, or ask them to invite you to theirs.
                        </p>
                        <Link href="/circles/create">
                            <Button>Create Your First Circle</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
