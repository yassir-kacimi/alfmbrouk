import React from 'react'
import "../styles/AgentAvatar.css"

// import {selectUser} from "../features/userSlice";
// import {useSelector} from "react-redux"


function AgentAvatar() {
  // const user =useSelector(selectUser);
  return (
    <div className='AgentAvatar'>
        <img className='AgentAvatarImg' alt="" src=""></img>
        <h6>userName</h6>
        {/* {user.displayName} 
      {user.photo}*/}
    </div>
  )
}

export default AgentAvatar