import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import SendIcon from '@mui/icons-material/Send';

function MessageInput(){
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const enterSend = (event) => {
        if(event.key === 'Enter'){
            handleSend()
            setText("")
            setImg(null)
        }
    }

    const handleSend = async () => {
        if (img) {
          const storageRef = ref(storage, uuid());
    
          const uploadTask = uploadBytesResumable(storageRef, img);
    
          uploadTask.on(
            (error) => {
              //TODO:Handle Error
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                    img: downloadURL,
                  }),
                });
              });
            }
          );
        } else {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
            }),
          });
        }
    
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    
        await updateDoc(doc(db, "userChats", data.user.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    
        setText("");
        setImg(null);

        console.log(text)
      };
      
    return(
        <div className="flex w-full h-full bg-primary text-secondary">
            {/* Type Bar for the message */}
            <div className="w-full h-fit">
                <input onKeyDown={enterSend} value={text} onChange={e=>setText(e.target.value)} className="p-5 font-poppins text-secondary text-lg w-full" type="text" placeholder="Type a message..."/>
            </div>

            {/* Emoji and Attachment Buttons */}
            <div className="flex justify-center items-center gap-5 px-5 w-fit">
                <input onChange={e=>setImg(e.target.files[0])} type="file" />
            </div>

            {/* Submit Button */}
            <div className="flex items-center px-5 w-fit">
                <button onClick={handleSend} className="flex items-center w-full gap-5 py-3 px-5 bg-accent font-poppins text-lg font-semibold rounded-lg text-primary">
                    Send
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default MessageInput;