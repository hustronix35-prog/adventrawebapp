import { getCommunities } from '@/app/actions/communities'
import CommunityList from '@/components/communities/CommunityList'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function CommunitiesPage() {
    let session;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        console.error("Session error:", error);
        redirect("/api/auth/signout?callbackUrl=/communities");
    }

    if (!session) {
        redirect("/login?callbackUrl=/communities");
    }

    const communities = await getCommunities()

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Communities</h1>
                    <p className="text-gray-500 mt-2">Join circles to connect with like-minded adventurers.</p>
                </div>

                <CommunityList initialCommunities={communities} />
            </div>
        </div>
    )
}
