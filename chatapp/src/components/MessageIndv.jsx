import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import recentprof from "../Images/avataraccount.jpeg"
import { ChatContext } from "../context/ChatContext";
import "../css/styling.css"

function MessageIndv({message}){
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth"});
    }, [message])

    console.log(message)
    return(
        // Individual Messages sent by senders
        <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            {/* Image of the sender */}
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <div className="w-fit h-fit">
                    <img src={
                        message.senderId === currentUser.uid 
                        ? currentUser.photoURL
                        : data.user.photoURL
                    } alt="" />
                </div>
            </div>

            {/* Message of the sender */}
            <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
                <div className={`sender ${message.senderId === currentUser.uid && "owner"}`}>
                    <p className=" text-justify">{message.text}</p>
                    {message.img && <img src={message.img} alt="" />}
                </div>

                {/* Timestamp */}
                <div className="flex items-end justify-start w-[10%] p-2">
                    <p className="font-poppins text-md text-gray-400"></p>
                </div>
                
            </div>        
        </div>
    )
}

export default MessageIndv;