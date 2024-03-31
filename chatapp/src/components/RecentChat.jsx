import React from "react";
import recentprof from "../Images/avataraccount.jpeg"

function RecentChat(){
    return(
        <div className="flex h-full w-full gap-5 text-secondary border-b p-5">
            {/* Avatar Profile */}
            <div className="w-1/6 h-full rounded-full overflow-hidden">
                <img src={recentprof} alt="Acc Picture" />
            </div>
            
            {/* Recent Chat Name and Msg */}
            <div className="flex flex-col w-full">
                {/* Upper Part */}
                <div className="flex justify-between w-full font-poppins">
                    <p>Alwyn Chua</p>
                    <p className=" text-gray-500">8:00 AM</p>
                </div>

                {/* Lower Part */}
                <div className="flex">
                    <p>Lorem ipsum dolor sit consectetur...</p>
                </div>
            </div>
        </div>
    )

}

export default RecentChat;