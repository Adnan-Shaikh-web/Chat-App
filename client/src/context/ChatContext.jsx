import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { baseUrl, getRequest, postRequest } from '../utils/services'

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isuserChatsLoading, setIsUserChatsLoading] = useState(null);
    const [userChatsError, setUserChatsError] = useState(null);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null)
                const response = await getRequest(`${baseUrl}/chats/${user?._id}`)
                setIsUserChatsLoading(false);
                if (response.error) {
                    return setUserChatsError(response)
                }
                setUserChats(response);
            }
        }
        getUserChats()
    }, [user])

    return <ChatContext.Provider value={{ userChats, isuserChatsLoading, userChatsError }}>

        {children}
    </ChatContext.Provider>
}