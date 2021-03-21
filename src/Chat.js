import React from 'react'
import { Avatar, IconButton } from '@material-ui/core' 
import "./Chat.css"
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'

function Chat() {
    return (
        <div className = "chat">
            <div className = "chat__header">
                 <Avatar/>
                 <div className = "chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at .....</p>
                 </div>
                 
                 <div className = "chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                 </div>
            </div>

            <div className = "Chat__body">

                <div className = "chat__message">
                    <p>
                        <span className = "chat__name">Sonny</span>
                        This is Message...
                        <span className ="chat__timeStamp">{new Date().toUTCString()}</span>
                    </p>
                </div>

                <div className = "chat__message chat__receiver">
                    <p>
                        <span className = "chat__name">Sonny</span>
                        This is Message...
                        <span className ="chat__timeStamp">{new Date().toUTCString()}</span>
                    </p>
                </div>

                <div className = "chat__message">
                    <p>
                        <span className = "chat__name">Sonny</span>
                        This is Message...
                        <span className ="chat__timeStamp">{new Date().toUTCString()}</span>
                    </p>
                </div>
            </div>

            <div className = "chat__footer">
                <InsertEmoticon/>
                <form>
                    <input type = "text" placeholder ="Type a message"/>
                    <button>send a message</button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
