import React from "react";
import recentprof from "../Images/avataraccount.jpeg"

function RecentChat(){
    return(
        <div className="flex h-fit w-full gap-5 text-secondary border-b p-5 hover:bg-accent hover:duration-200 hover:text-primary cursor-pointer">
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
                <div className=" w-72 flex">
                    <p className="truncate">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, soluta corporis quis possimus aut odio neque earum alias blanditiis eveniet quam incidunt aperiam vero tempora a accusantium cupiditate, quia similique?</p>
                </div>
            </div>
        </div>
    )

}

export default RecentChat;