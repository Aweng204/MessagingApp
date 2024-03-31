import React from "react"
import NavBar from "./../components/NavBar"
import SideBar from "../components/SideBar"
import Message from "../components/Message"

function Home() {
    return(
        // Whole Homepage
        <div className="flex flex-col w-full h-full bg-primary">
                {/* Top Navigation Bar */}
                <div className="flex h-fit">
                    <NavBar />
                </div>

                {/* Main Home Body */}
                <div className="flex h-full">
                    {/* SideBar of home budy */}
                    <div className="w-1/6 h-full">
                        <SideBar />
                    </div>

                    {/* Message of home budy */}
                    <div className="w-full h-full">
                        <Message />
                    </div>
                </div>
        </div>
    );
}

export default Home;