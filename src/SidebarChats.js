import React from 'react'
import { Avatar } from '@material-ui/core'
import "./SidebarChats.css"

function SidebarChats() {
    return (
        <div className = "sidebarchats">
            <Avatar/>
            <div className = "sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message.</p>
            </div>
        </div>
    )
}

export default SidebarChats
