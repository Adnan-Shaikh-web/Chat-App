import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
    const { userChats, isuserChatsLoading, userChatsError } = useContext(ChatContext);

    console.log('userChats', userChats)
    return (
        <>
            Chat
        </>
    )
}

export default Chat
