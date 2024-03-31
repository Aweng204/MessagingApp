import React from "react";
import SideChat from "./SideChat";
import MainChat from "./MainChat";

function Message(){
    return(
        <div className="flex flex-col justify-center w-full h-full ">
            {/* Header of the main chatbox body */}
            <div className="w-full h-fit p-5 text-xl font-poppins">
                <p>Chats</p>
            </div>

            {/* Main Chatbox body */}
            <div className="flex justify-center items-center w-full h-full ">
                {/* Side Chat */}
                <div className="flex justify-center center w-1/3 h-full">
                    <SideChat />
                </div>

                {/* Main Chat */}
                <div className="flex justify-center items-center w-full h-full ">
                    <MainChat />
                </div>
            </div>
        </div>
    )
}

export default Message;