import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import RecentChat from "./RecentChat";

const SideChat = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className=" w-full h-full">
        {/* Search Bar */}
        <input  onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} className="w-full p-5 font-poppins border bg-primary" type="text" placeholder="Find a User"/>

        {error && <span>User not found!</span>}
        {/* Recent Chats */}
        {user && (
            <div className="flex items-center w-full h-fit p-5 gap-5 cursor-pointer hover:bg-accent hover:text-primary hover:duration-200" onClick={handleSelect}>
                <div className="w-1/6 h-full rounded-full overflow-hidden">
                    <img className="object-fill" src={user.photoURL} alt="" />
                </div>
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>
        )}

        <div className="w-full h-[90vh] overflow-y-auto">
            <RecentChat />
        </div>
    </div>
  );
};

export default SideChat;