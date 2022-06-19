import React from 'react';
// import {Carousel} from "react-bootstrap";
import "../styles/Welcome.css"
import { auth, provider } from "../service/firebase";
// import {useDispatch} from "react-redux";

// import {login, logout} from "../features/userSlice";
 import {selectUser} from "../features/userSlice";

 import {useSelector} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';





function Welcome() {
  const user =useSelector(selectUser);
  
  



  const signIn= () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));//.catch .. is a callback function
  };

   


  // <h1>Hello !</h1>
  // <h1>Welcome to <span className='alfmbrk'><span className='Alf'>Alf</span>M'brouk</span>.</h1>
  // <h2> Get offers from service providers for your Wedding</h2>



  return (
    <div className='Welcome'>
  
      <div  className='welcomeMessage'>
          
          
          <h2>Tout pour organiser votre mariage</h2>
          <div className="lg">
          <h1>Bienvenue à  </h1>
          <img className="lgWelcome" alt="" src='../lg.png'></img>
          {/* <span className='alfmbrk'><span className='Alf'>Alf</span>M'brouk</span> */}
          </div>
          
          
          <button   onClick={signIn} type="button" class="btn btn-outline-warning " size="lg">Sign up for free</button>
      </div>          
    
    </div>
  )
}

export default Welcome;




       

        // <Carousel>
        // <Carousel.Item className="img" interval={1900}>
        // <h3>Find your Perfect Plan</h3>
        // <p>Our priority is to make you happy </p>
        // </Carousel.Item>
        // <Carousel.Item interval={1900}>
        // <h2>Build your E-Commerce business</h2>
        // <p>work smart. Earn fast</p>
        // </Carousel.Item>
        // <Carousel.Item interval={1900}>  
        // <h2>Are you a vendor?</h2>
        // <p>Sign up on AlfMbrok to reach more couples and book more weddings!</p>
        // </Carousel.Item>
        // </Carousel> 






