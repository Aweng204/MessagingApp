import React, { useContext } from "react";
import recentprof from "../Images/avataraccount.jpeg"
import Settings from "@mui/icons-material/Settings";
import SearchIcon from '@mui/icons-material/Search';
import { ChatContext } from "../context/ChatContext";

function ChatHeadliner(){
    const { data } = useContext(ChatContext);

    return(
        <div className="flex justify-between h-full w-full gap-5 text-secondary">
            {/* Avatar Profile */}
            <div className="flex gap-5 px-5 py-2 w-full">
                {/* Profile */}
                <div className="w-[60px] h-[50px] rounded-full overflow-hidden object-cover">
                    <img src={data.user?.photoURL} alt="" />
                </div>

                {/* Name of Chat */}
                <div className="flex flex-col w-full font-poppins text-secondary">
                    <p className="text-lg">{data.user?.displayName}</p>
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