import React from "react"
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

import chatboxlogo from "../Images/ChatBox.png"

function SignUp() {
    return(
        <div className="flex justify-center items-center w-screen h-screen bg-accent bg-opacity-80">
            <div className="flex flex-col justify-center items-center gap-5 w-fit h-fit p-5 rounded-xl bg-primary">
                <div className="flex flex-col justify-center items-center w-fit">
                    {/* Sign Up Header */}
                    <div className="flex flex-col justify-center items-center w-auto">
                        <img className=" w-full h-full" src={chatboxlogo} alt="chatBox! Logo" />
                        <h1 className="w-fit h-fit text-xl font-bold text-secondary">Welcome to chatBox!</h1>
                    </div>
                    {/* Text Box for Information Input */}
                    <form className="flex flex-col justify-center items-center w-full p-5 gap-5 text-lg text-secondary">
                        <input type="text" placeholder="Enter your Name" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <input type="text" placeholder="Enter your Email" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <input type="password" placeholder="Enter your Password" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <button className=" bg-accent w-full p-3 rounded-xl text-primary font-bold">Sign Up</button>
                        <p>Already have an account?
                            <span className=" text-accent underline cursor-pointer font-bold">Sign In here</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;