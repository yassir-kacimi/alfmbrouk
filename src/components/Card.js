import React from "react";
import "../styles/Card.css";

import AgentAvatar from "./AgentAvatar";
import StarIcon from '@material-ui/icons/Star';



function Card({src, description, rating, price}){ /*props we're gonna be using*/
  
  return(
    <div className="card">
      <img src={src} alt="" />
      <AgentAvatar />
      <div className="card_info"> 
        <div className="flex"><p className="description">{description}</p></div>     
        
        <div className="rating">
           <StarIcon className="ratingStar"/>
           <h6>{rating}</h6>
        </div>
        <hr></hr>
        <h5>STARTING AT  <strong>{price}</strong> MAD</h5>
      </div>
    </div>
    

  )
}

export default Card;