import React from "react";
import "../styles/login.css";
import {Button} from "@material-ui/core";
import { auth, provider } from "../service/firebase";


function Login(){
  const signIn= () => {
     auth.signInWithPopup(provider).catch((error) => alert(error.message));//.catch .. is a callback function
  };
  return(
    <div className="login">

      <div className="loginLogo">
      {/* <h1>Alf<span>M'brouk</span></h1> */}
      {/* <h2>welcome to </h2>
      <h1>AlfM'brouk</h1> */}
      <h2>join us for FREE</h2>
      </div>
      <Button onClick={signIn}>sign up</Button>
    </div>
  );
}

export default Login;