import React from 'react';
import "../styles/Avatar.css";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

function Avatar({src, name}) {
  return (
    <div className='Avatar'>
      {/* // const user =useSelector(selectUser); */}
      <img className='imgAvatar' alt="" src={src}></img>
      {/* <h5>User Name</h5> */}
    </div>
  )
}

export default Avatar;