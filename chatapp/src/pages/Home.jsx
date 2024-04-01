import React from "react"
import NavBar from "./../components/NavBar"
import SideBar from "../components/SideBar"
import Message from "../components/Message"

function Home() {
    return(
        // Whole Homepage
        <div className="flex flex-col w-screen h-[100vh] bg-primary">
                {/* Top Navigation Bar */}
                <div className="flex w-full h-[10vh]">
                    <NavBar />
                </div>

                {/* Main Home Body */}
                <div className="flex items-start w-full h-[90vh]">
                    {/* SideBar of home budy */}
                    <div className="w-1/6 h-full">
                        <SideBar />
                    </div>

                    {/* Message of home budy */}
                    <div className="w-full h-full border-l overflow-clip">
                        <Message />
                    </div>
                </div>
        </div>
    );
}

export default Home;