'use client'

import { useState, useEffect, useRef } from 'react';
import { Send, User } from 'lucide-react';
import { getCircleMessages, sendCircleMessage } from '@/app/actions/chat';
import Button from '@/components/ui/Button';

interface ChatMessage {
    id: string;
    content: string;
    createdAt: Date;
    senderType: string;
    senderName: string | null | undefined;
    senderImage: string | null | undefined;
    isMe: boolean;
}

export default function CircleChat({ circleId }: { circleId: string }) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const fetchMessages = async () => {
        const msgs = await getCircleMessages(circleId);
        setMessages(msgs);
        setLoading(false);
    };

    useEffect(() => {
        fetchMessages();
        // Polling for new messages every 5 seconds
        const interval = setInterval(fetchMessages, 5000);
        return () => clearInterval(interval);
    }, [circleId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const optimisicMsg = {
            id: 'temp-' + Date.now(),
            content: newMessage,
            createdAt: new Date(),
            senderType: 'USER',
            senderName: 'Me',
            senderImage: null,
            isMe: true
        };

        setMessages(prev => [...prev, optimisicMsg]);
        const sentContent = newMessage;
        setNewMessage('');

        await sendCircleMessage(circleId, sentContent);
        fetchMessages();
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Group Chat</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {loading && messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">Loading chat...</div>
                ) : messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-10">
                        <p>No messages yet. Start the conversation!</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-end max-w-[80%] gap-2 ${msg.isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                    {msg.senderImage ? (
                                        <img src={msg.senderImage} alt={msg.senderName || 'U'} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-xs font-medium text-gray-600">
                                            {msg.senderName?.[0] || (msg.senderType === 'ORGANIZER' ? 'O' : 'U')}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {!msg.isMe && (
                                        <div className="text-xs text-gray-500 ml-1 mb-1">
                                            {msg.senderName}
                                            {msg.senderType === 'ORGANIZER' && <span className="bg-primary/10 text-primary px-1 rounded ml-1">Admin</span>}
                                        </div>
                                    )}
                                    <div className={`p-3 rounded-2xl text-sm ${msg.isMe
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                    <div suppressHydrationWarning className={`text-[10px] text-gray-400 mt-1 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 flex gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    aria-label="Send message"
                    className="p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}
