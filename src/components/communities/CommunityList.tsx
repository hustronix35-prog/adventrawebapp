'use client'

import { useState, useEffect } from 'react'
import { joinCommunity, leaveCommunity } from '@/app/actions/communities'
import { Users, Loader2, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface Community {
    id: string
    name: string
    description: string
    image: string | null
    memberCount: number
    isMember: boolean
}

import CreateCommunityModal from './CreateCommunityModal'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

// ... interface

export default function CommunityList({ initialCommunities }: { initialCommunities: Community[] }) {
    const [communities, setCommunities] = useState(initialCommunities)
    const [loadingId, setLoadingId] = useState<string | null>(null)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setCommunities(initialCommunities)
    }, [initialCommunities])

    // ... handlers
    const handleJoin = async (id: string) => {
        setLoadingId(id)
        try {
            await joinCommunity(id)
            setCommunities(prev => prev.map(c =>
                c.id === id ? { ...c, isMember: true, memberCount: c.memberCount + 1 } : c
            ))
            toast.success('Joined community successfully!')
        } catch (error) {
            toast.error('Failed to join community')
        } finally {
            setLoadingId(null)
        }
    }

    const handleLeave = async (id: string) => {
        setLoadingId(id)
        try {
            await leaveCommunity(id)
            setCommunities(prev => prev.map(c =>
                c.id === id ? { ...c, isMember: false, memberCount: c.memberCount - 1 } : c
            ))
            toast.success('Left community successfully')
        } catch (error) {
            toast.error('Failed to leave community')
        } finally {
            setLoadingId(null)
        }
    }

    return (
        <>
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                >
                    <Plus className="w-5 h-5" />
                    Create New Community
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communities.map(community => (
                    // ... existing card code
                    <div key={community.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                            <Image
                                src={community.image || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'}
                                alt={community.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold">{community.name}</h3>
                                <div className="flex items-center gap-2 text-sm opacity-90">
                                    <Users className="w-4 h-4" />
                                    <span>{community.memberCount} members</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-6 line-clamp-2">{community.description}</p>
                            <div className="flex gap-3">
                                {community.isMember && (
                                    <Link
                                        href={`/circles/${community.id}`}
                                        className="flex-1 bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Chat
                                    </Link>
                                )}
                                <button
                                    onClick={() => community.isMember ? handleLeave(community.id) : handleJoin(community.id)}
                                    disabled={!!loadingId}
                                    className={`py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${community.isMember
                                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 px-4'
                                        : 'w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                                        }`}
                                >
                                    {loadingId === community.id ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : community.isMember ? (
                                        'Leave'
                                    ) : (
                                        'Join Community'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <CreateCommunityModal
                isOpen={isCreateModalOpen}
                onClose={() => {
                    setIsCreateModalOpen(false)
                    router.refresh()
                }}
            />
        </>
    )
}
