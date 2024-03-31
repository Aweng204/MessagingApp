import React from "react";
import recentprof from "../Images/avataraccount.jpeg"
import Settings from "@mui/icons-material/Settings";
import SearchIcon from '@mui/icons-material/Search';

function ChatHeadliner(){
    return(
        <div className="flex justify-between h-full w-full gap-5 text-secondary">
            {/* Avatar Profile */}
            <div className="flex gap-5 px-5 py-2 w-full">
                {/* Profile */}
                <div className="w-[10%] h-full rounded-full overflow-hidden object-cover border border-blue-500">
                    <img src={recentprof} alt="" />
                </div>

                {/* Name of Chat */}
                <div className="flex flex-col w-full font-poppins text-secondary">
                    <p className="text-lg">Alwyn Chua</p>
                    <p className="text-sm text-gray-400">Active 50 Mins Ago</p>
                </div>
            </div>

            {/* Right Side of the Headliner */}
            <div className="flex justify-end items-center gap-5 px-10 w-full">
                <SearchIcon />
                <Settings />
            </div>

        </div>
    )
}

export default ChatHeadliner;