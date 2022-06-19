import React from 'react';
import "../styles/Sidebar.css";
import Conversation from './Conversation';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='SidebarTop'>
           <h4>All conversations</h4>
           
        </div>
        <div className='conversations'>
        <Conversation/>
        </div>
       

    </div>
  )
}

export default Sidebar