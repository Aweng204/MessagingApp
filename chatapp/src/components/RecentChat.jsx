import React, { useEffect, useState, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function RecentChat(){
    const [chats, setChats] = useState([]);


    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
          const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data());
          });
    
          return () => {
            unsub();
          };
        };
    
        currentUser.uid && getChats();
      }, [currentUser.uid]);
      console.log(Object.entries(chats))
      console.log("Current User:", currentUser.displayName);
      console.log("Current User UID:", currentUser.uid);
      

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
      };
    
    return(
        <div className="flex flex-col overflow-y-auto">
           {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chats) => (
            <div key={chats[0]} onClick={() => handleSelect(chats[1].userInfo)} className="flex h-fit w-full gap-5 text-secondary border-b p-5 hover:bg-accent hover:duration-200 hover:text-primary cursor-pointer">
            <div className="w-[60px] h-[50px] rounded-full overflow-hidden">
                <img src={chats[1].userInfo.photoURL} alt="Acc Picture" />
            </div>
    
            <div className="flex flex-col w-full">
                {/* Upper Part */}
                <div className="flex justify-between w-full font-poppins">
                    <p>{chats[1].userInfo.displayName || "Unknown User"}</p>
                    <p className=" text-gray-500">{chats[1].lastMessage?.date}</p>
                </div>

                {/* Lower Part */}
                <div className=" w-72 flex">
                    <p className="truncate">{chats[1].lastMessage?.text}</p>
                </div>
            </div>
        </div> 
        ))}
        </div>
    )

}

export default RecentChat;