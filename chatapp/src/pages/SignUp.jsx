import React from "react"
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import chatboxlogo from "../Images/ChatBox.png"

import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{

        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        
        try{
            //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try{
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");

            } catch(error){
            setError(true);
            }
      });
    }); 
        }catch (error) {
        setError(true);
      }
    };

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
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full p-5 gap-5 text-lg text-secondary">
                        <input type="text" placeholder="Enter your Name" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <input type="text" placeholder="Enter your Email" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <input type="password" placeholder="Enter your Password" className="p-3 w-full border border-gray-400 rounded-xl bg-primary" />
                        <input type="file" className="w-full bg-primary" />
                        <button className=" bg-accent w-full p-3 rounded-xl text-primary font-bold">Sign Up</button>
                        {error && <span>Something went wrong here!</span>}
                        <p>Already have an account?
                            <span className=" text-accent underline cursor-pointer font-bold"><Link to="/signin"> Sign In Here</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp;