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

import CommunityCard from './CommunityCard'
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
                    <CommunityCard
                        key={community.id}
                        community={community}
                        onJoin={handleJoin}
                        onLeave={handleLeave}
                        isLoading={loadingId === community.id}
                    />
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
