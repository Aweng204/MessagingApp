import React, { useState, useContext, useEffect } from "react"
import ChatHeadliner from "./ChatHeadliner";
import MessageInput from "./MessageInput";
import MessageIndv from "./MessageIndv";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function MainChat(){
    const [ messages, setMessages ] = useState([])
    const {data } = useContext(ChatContext)

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages (doc.data().messages)
        })

        return ()=>{
            unSub()
        }
    }, [data.chatId])

    console.log(messages)

    return(
        // Main ChatBox!
        <div className="flex flex-col justify-between w-full h-full">
            {/* Main Chatbox Headliner */}
            <div className="flex w-full h-fit">
                <ChatHeadliner />
            </div>

            {/* Main box exchanging messages */}
            <div className="w-full h-[68vh]">
                <div className="h-full overflow-y-scroll">
                    {messages.map((m) => (
                        <MessageIndv message={m} />
                    ))}
                </div>
                
            </div>
            
            {/* Main box input message */}
            <div className="flex w-full h-fit">
                <MessageInput />
            </div>
        </div>
    )
}

export default MainChat;