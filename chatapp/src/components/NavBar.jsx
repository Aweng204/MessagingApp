import React from "react";
import chatboxlogo from "./../Images/ChatBoxS.png"
import account from "./../Images/avataraccount.jpeg"

function NavBar (){
    return(
    <div className="flex justify-between w-full h-full border-b-2 border-gray-100">
        {/* Left side of the navigation bar */}
        <div className="flex items-center h-full w-full px-10">
            <img className="h-full" src={chatboxlogo} alt="chatBox Logo" />
        </div>

        {/* Right side of the navigation bar */}
        <div className="flex justify-end items-center p-5 px-10 gap-5 w-full h-full">
            <div className="flex text-secondary text-xl font-semibold">
                <p>Hello, <span className="text-accent">Alwyn!</span></p>    
            </div>
            <div className="w-[7%] h-full rounded-full object-fill overflow-hidden">
                <img src={account} alt="pfp" />
            </div>
        </div>
    </div>
    )
}

export default NavBar;