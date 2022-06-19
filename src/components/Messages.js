import React from 'react';
import "../styles/Messages.css"
import Sidebar from "./Sidebar";
import Chat from "./Chat";


function Messages() {
  return (
    <div className='Messages'>
        
        <Sidebar />
        <Chat />
    </div>
  )
}

export default Messages