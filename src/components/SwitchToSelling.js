import React, {useEffect} from "react";

import Login from './Login';
import Offer from "./Offer"


import {useDispatch ,useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import { auth } from '../service/firebase';
import {login, logout} from "../features/userSlice";



function App() {
    const dispatch= useDispatch();
    const user =useSelector(selectUser); // had user hazo m3aya f slice bach nhto finma bghit 
    
    useEffect(()=>{ // it's like an event listener
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(
            login({
              uid:authUser.uid,
              photo:authUser.photoURL,
              email:authUser.email,
              displayName:authUser.displayName 
            }) // state.user fiha had les 4 infos 
            
          )
          
        }else{
          dispatch(logout());
        }
      })
    },[dispatch]);
    
  return (
    <div className="app">
      {user ? (
        <>
        <Offer />      
        </>
      ) : <Login />}

    </div>
  );
}
export default App;