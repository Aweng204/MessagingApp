import React from "react"
import RecentChat from "./RecentChat";

function SideChat(){
    return(
        // SideChat Total
        <div className="flex flex-col w-full h-full">
            {/* Input - Searchbox */}
            <div className="w-full border-b border-gray-300">
                <input className="w-full p-5 text-lg font-poppins" type="text" placeholder="Search..." />
            </div>
            
            {/* Recent Chat */}
            <div className="flex flex-col w-full h-full border bg-primary overflow-scroll">
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />

            </div>
        </div>
    );
}

export default SideChat;