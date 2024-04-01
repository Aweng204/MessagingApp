import React from "react"
import RecentChat from "./RecentChat";

function SideChat(){
    return(
        // SideChat Total
        <div className="flex flex-col w-full h-full">
            {/* Input - Searchbox */}
            <div className="w-full h-fit">
                <input className="w-full p-5 font-poppins border bg-primary" type="text" placeholder="Search..."/>
            </div>

            {/* Recent Chats */}
            <div className="w-full h-[90vh] overflow-y-scroll">
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
                <RecentChat />
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