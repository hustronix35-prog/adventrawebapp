'use client'

import ChatLayout from '@/components/chat/ChatLayout'
import { useState, useEffect } from 'react'
import { sendMessage } from '@/app/actions/messages'
import { searchUsers } from '@/app/actions/users'

interface MessagesClientProps {
    initialConversations: any[]
}

export default function MessagesClient({ initialConversations }: MessagesClientProps) {
    const [activeContact, setActiveContact] = useState(initialConversations[0])
    const [messages, setMessages] = useState<any[]>([])
    const [contacts, setContacts] = useState(initialConversations)
    const [searchResults, setSearchResults] = useState<any[]>([])
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        if (activeContact) {
            setMessages(activeContact.messages || [])
        }
    }, [activeContact])

    const handleSendMessage = async (userId: string, content: string) => {
        const newMsg = await sendMessage(userId, content)
        if (newMsg) {
            setMessages(prev => [...prev, newMsg])

            // Update contacts list
            setContacts(prev => {
                const existingIndex = prev.findIndex(c => c.id === userId)
                if (existingIndex >= 0) {
                    const updated = [...prev]
                    updated[existingIndex] = {
                        ...updated[existingIndex],
                        lastMessage: content,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                    // Move to top
                    const item = updated.splice(existingIndex, 1)[0]
                    updated.unshift(item)
                    return updated
                } else {
                    if (activeContact && activeContact.id === userId) {
                        return [{
                            ...activeContact,
                            lastMessage: content,
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            messages: [newMsg]
                        }, ...prev]
                    }
                    return prev
                }
            })
        }
        return newMsg
    }

    const handleSearch = async (query: string) => {
        if (!query) {
            setSearchResults([])
            setIsSearching(false)
            return
        }
        setIsSearching(true)
        const results = await searchUsers(query)
        setSearchResults(results)
    }

    const handleSelectSearchResult = (user: any) => {
        const existing = contacts.find(c => c.id === user.id)
        if (existing) {
            setActiveContact(existing)
        } else {
            const newContact = {
                ...user,
                lastMessage: '',
                time: '',
                unread: 0,
                online: false,
                messages: []
            }
            setActiveContact(newContact)
        }
        setSearchResults([])
        setIsSearching(false)
    }

    return (
        <div className="container mx-auto py-8">
            <ChatLayout
                title="Messages"
                contacts={contacts}
                messages={messages}
                activeContact={activeContact}
                onContactSelect={setActiveContact}
                onSendMessage={handleSendMessage}
                onSearch={handleSearch}
                searchResults={searchResults}
                onSelectSearchResult={handleSelectSearchResult}
                isSearching={isSearching}
            />
        </div>
    )
}
