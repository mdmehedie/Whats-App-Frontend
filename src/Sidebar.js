import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutLined from '@material-ui/icons/Search';
import SidebarChats from "./SidebarChats";

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <Avatar src = "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"/>
                <div className = "sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className = "sidebar__search">
                <div className = "sidebar__searchContainer">
                    <SearchOutLined/>
                    <input type = "text" placeholder = "Search or start new chat"/>
                </div>
            </div>
            <div className = "sidebar__chats">
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
            </div>
        </div>
    )
}

export default Sidebar
