import React from "react"
import ChatHeadliner from "./ChatHeadliner";
import MessageInput from "./MessageInput";
import MessageIndv from "./MessageIndv";

function MainChat(){
    return(
        // Main ChatBox!
        <div className="flex flex-col w-full h-full">
            {/* Main Chatbox Headliner */}
            <div className="flex w-full h-fit">
                <ChatHeadliner />
            </div>

            {/* Main box exchanging messages */}
            <div className="w-full h-screen overflow-scroll">
                <MessageIndv />
                <MessageIndv />
                <MessageIndv />
                <MessageIndv />
                <MessageIndv />
            </div>
            
            {/* Main box input message */}
            <div className="flex w-full h-fit bg-blue-50">
                <MessageInput />
            </div>
        </div>
    )
}

export default MainChat;