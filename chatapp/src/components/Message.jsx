import React from "react";
import SideChat from "./SideChat";
import MainChat from "./MainChat";
import RecentChat from "./RecentChat";

function Message(){
    return(
        <div className="">
            {/* Header of the main chatbox body */}
            <div className="w-full h-fit p-5 text-xl font-poppins">
                <p>Chats</p>
            </div>

            {/* Main Chatbox body */}
            <div className="flex w-full h-[83vh]">
                {/* Side Chat */}
                <div className="flex justify-center items-center w-1/3 h-full">
                    <SideChat />
                </div>

                {/* Main Chat */}
                <div className="w-full h-full border ">
                    <MainChat />
                </div>
            </div>
        </div>
    )
}

export default Message;