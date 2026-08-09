import { getConversations } from '@/app/actions/messages'
import MessagesClient from './MessagesClient'

export default async function MessagesPage() {
    const conversations = await getConversations()

    return (
        <MessagesClient initialConversations={conversations} />
    )
}
