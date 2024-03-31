import React from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';

function MessageInput(){
    return(
        <div className="flex w-full h-full bg-primary text-secondary">
            {/* Type Bar for the message */}
            <div className="w-full h-fit">
                <input className="p-5 font-poppins text-secondary text-lg w-full" type="text" placeholder="Type a message..."/>
            </div>

            {/* Emoji and Attachment Buttons */}
            <div className="flex justify-center items-center gap-5 px-5 w-fit">
                <button>
                    <EmojiEmotionsIcon />
                </button>
                <button>
                    <AttachmentIcon />
                </button>
            </div>

            {/* Submit Button */}
            <div className="flex items-center px-5 w-fit">
                <button className="flex items-center w-full gap-5 py-3 px-5 bg-accent font-poppins text-lg font-semibold rounded-lg text-primary">
                    Send
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default MessageInput;