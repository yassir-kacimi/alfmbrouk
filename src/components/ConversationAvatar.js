import React from 'react';
import "../styles/ConversationAvatar.css"
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

function ConversationAvatar({src, name}) {
  return (
    <div className='ConversationAvatar'>
      {/* // const user =useSelector(selectUser); */}
      <img className='imgAvatar' alt="" src={src}></img>
      <h5>UserName</h5>
    </div>
  )
}

export default ConversationAvatar;