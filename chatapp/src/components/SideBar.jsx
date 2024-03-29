import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

function SideBar(){
    return(
        <div className="h-full flex flex-col gap-2 text-xl">
            {/* Message Tab */}
            <div className="flex gap-5 p-5 w-full h-fit text-secondary cursor-pointer">
                <MessageIcon />
                <p>Messages</p>
            </div>

            {/* Contact Tab */}
            <div className="flex gap-5 p-5 w-full h-fit text-secondary cursor-pointer">
                <ContactsIcon />
                <p>Contact</p>
            </div>
            
            {/* Notification Tab */}
            <div className="flex gap-5 p-5 w-full h-fit text-secondary cursor-pointer">
                <NotificationsIcon />
                <p>Notification</p>
            </div>
            
            {/* Setting Tab */}
            <div className="flex gap-5 p-5 w-full h-fit text-secondary cursor-pointer">
                <SettingsIcon />
                <p>Setting</p>
            </div>
        </div>
    )
}

export default SideBar