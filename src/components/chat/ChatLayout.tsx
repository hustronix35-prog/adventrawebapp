'use client'

import { Search, MoreVertical, Phone, Video, Image as ImageIcon, Mic, Send } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


interface Contact {
    id: string
    name: string
    avatar: string
    lastMessage: string
    time: string
    unread?: number
    online?: boolean
}

interface Message {
    id: string
    senderId: string
    text: string
    time: string
    isMe: boolean
}

interface ChatLayoutProps {
    title: string
    contacts: Contact[]
    messages: Message[]
    activeContact: Contact
    onContactSelect: (contact: Contact) => void
    onSendMessage: (receiverId: string, content: string) => Promise<any>
    onSearch?: (query: string) => void
    searchResults?: any[]
    onSelectSearchResult?: (user: any) => void
    isSearching?: boolean
}

export default function ChatLayout({
    title,
    contacts,
    messages,
    activeContact,
    onContactSelect,
    onSendMessage,
    onSearch,
    searchResults,
    onSelectSearchResult,
    isSearching
}: ChatLayoutProps) {
    const [newMessage, setNewMessage] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const handleSend = async () => {
        if (!newMessage.trim() || !activeContact) return

        const tempId = Date.now().toString()
        setNewMessage('')

        try {
            await onSendMessage(activeContact.id, newMessage)
        } catch (error) {
            console.error('Failed to send message:', error)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)
        if (onSearch) {
            onSearch(query)
        }
    }

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-[calc(100vh-120px)] flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-80 border-r border-gray-100 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                    <div className="relative" suppressHydrationWarning>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            suppressHydrationWarning
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {isSearching && searchResults && searchResults.length > 0 ? (
                        <div className="p-2">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Search Results</h3>
                            {searchResults.map(user => (
                                <div
                                    key={user.id}
                                    onClick={() => {
                                        if (onSelectSearchResult) onSelectSearchResult(user)
                                        setSearchQuery('')
                                    }}
                                    className="p-3 flex gap-3 hover:bg-gray-50 cursor-pointer transition-colors rounded-xl"
                                >
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover w-10 h-10"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">{user.name}</h3>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="border-b border-gray-100 my-2"></div>
                        </div>
                    ) : null}

                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => onContactSelect(contact)}
                            className={`p-4 flex gap-3 hover:bg-gray-50 cursor-pointer transition-colors ${activeContact && contact.id === activeContact.id ? 'bg-gray-50 border-r-2 border-primary' : ''
                                }`}
                        >
                            <div className="relative">
                                <Image
                                    src={contact.avatar}
                                    alt={contact.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover w-12 h-12"
                                />
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{contact.time}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {activeContact ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={activeContact.avatar}
                                    alt={activeContact.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900">{activeContact.name}</h3>
                                    <p className="text-xs text-gray-500">Last seen at 7:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button aria-label="Voice Call" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button aria-label="Video Call" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                    <Video className="w-5 h-5" />
                                </button>
                                <button aria-label="More Options" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
                            <div className="flex justify-center">
                                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Yesterday</span>
                            </div>
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] ${msg.isMe ? 'order-1' : 'order-2'}`}>
                                        <div className={`p-4 rounded-2xl ${msg.isMe
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none shadow-sm'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </div>
                                        <p className={`text-xs text-gray-400 mt-1 ${msg.isMe ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                                    </div>
                                    {!msg.isMe && (
                                        <Image
                                            src={activeContact.avatar}
                                            alt="Sender"
                                            width={32}
                                            height={32}
                                            className="rounded-full object-cover w-8 h-8 mr-2 order-1 self-end mb-5"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-100 bg-white">
                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                                <button aria-label="Attach Image" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                                    <ImageIcon className="w-5 h-5" />
                                </button>
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a Message..."
                                    className="flex-1 bg-transparent border-none text-sm text-gray-900 focus:ring-0 placeholder:text-gray-400"
                                />
                                <button aria-label="Voice Message" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                                    <Mic className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleSend}
                                    aria-label="Send Message"
                                    className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-400">
                        <p>Select a conversation to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    )
}
