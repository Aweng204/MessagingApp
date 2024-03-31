import React from "react";
import recentprof from "../Images/avataraccount.jpeg"

function MessageIndv(){
    return(
        // Individual Messages sent by senders
        <div className="flex items-center w-full h-fit p-5 gap-5">
            {/* Image of the sender */}
            <div className="w-[5%] h-full">
                <div className="w-fit h-fit rounded-full overflow-hidden">
                    <img src={recentprof} alt="" />
                </div>
            </div>

            {/* Message of the sender */}
            <div className="flex justify-between w-full h-fit gap-5">
                <div className="w-fit h-fit p-5 bg-gray-200 rounded-xl rounded-tl-none">
                    <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos, quod quo. Atque, amet! Sit placeat rerum sequi debitis 
                    expedita dolores mollitia eligendi, vero accusantium,
                    cumque consectetur assumenda nemo atque odit! Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Rerum repudiandae atque 
                    molestias possimus eius officiis dolorem. Nihil, 
                    sequi accusamus molestiae quam totam quae assumenda 
                    ipsam quaerat quidem quisquam earum illo?</p>
                </div>

                {/* Timestamp */}
                <div className="flex items-end justify-start w-[10%] p-2">
                    <p className="font-poppins text-md text-gray-400">8:50 PM</p>
                </div>
                
            </div>        
        </div>
    )
}

export default MessageIndv;