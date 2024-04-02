import React from "react";
import chatboxlogo from "./../Images/ChatBoxS.png"
import account from "./../Images/avataraccount.jpeg"
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

function NavBar (){
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    return(
    <div className="flex justify-between w-full h-full border-b-2 border-gray-100">
        {/* Left side of the navigation bar */}
        <div className="flex items-center w-full px-10">
            <img className="" src={chatboxlogo} alt="chatBox Logo" />
        </div>

        {/* Right side of the navigation bar */}
        <div className="flex justify-end items-center p-5 px-10 gap-5 w-full h-full">
            <div className="flex text-secondary text-xl font-semibold">
                <p>Hello, <span className="text-accent">{currentUser.displayName}</span></p>    
            </div>
            <div className="w-[5%] h-full rounded-full overflow-hidden">
                <img src={currentUser.photoURL} alt="pfp" />
            </div>
            <div className="">
                <button onClick={()=>signOut(auth)}><LogoutIcon/></button>
            </div>
        </div>
    </div>
    )
}

export default NavBar;