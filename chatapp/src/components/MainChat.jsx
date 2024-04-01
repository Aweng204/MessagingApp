import React from "react"
import ChatHeadliner from "./ChatHeadliner";
import MessageInput from "./MessageInput";
import MessageIndv from "./MessageIndv";

function MainChat(){
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
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
                    <MessageIndv />
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