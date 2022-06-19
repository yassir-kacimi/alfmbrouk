import React from 'react'
import "../styles/ConversationAvatar.css"

function AvatarMessage({src}) {
  return (
    <div className='AvatarMessage'>
        <img className='imgAvatar' alt="" src={src}></img>
    </div>
  )
}

export default AvatarMessage;