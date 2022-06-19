import React from 'react';
import "../styles/Message.css";
import AvatarMessage from "./AvatarMessage";



function Message({src}) {
  return (
    <div className='Message'>
        <div className='userMessage'>
        <AvatarMessage src={src}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        
       
    </div>
  )
}

export default Message;