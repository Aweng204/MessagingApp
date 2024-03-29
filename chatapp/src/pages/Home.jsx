import React from "react"
import NavBar from "./../components/NavBar"
import SideBar from "../components/SideBar"
import Message from "../components/Message"

function Home() {
    return(
        // Whole Homepage
        <div className="flex flex-col w-full h-screen bg-primary">
                {/* Top Navigation Bar */}
                <div className="flex h-fit">
                    <NavBar />
                </div>
                <div className="flex h-full">
                    <div className="w-1/6 h-full">
                        <SideBar />
                    </div>
                    <div className="w-full h-full bg-green-100">
                        <Message />
                    </div>
                </div>
        </div>
    );
}

export default Home;