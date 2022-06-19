import React from 'react';
import "../styles/Chat.css";
import ConversationAvatar from './ConversationAvatar';
import Message from "./Message";


import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";


function Chat() {
  return (
    <div className='Chat'>
        <div className='chatTop'>
        <ConversationAvatar  src="../profil2.png"/>
        </div>
        <div className='chatBottom'>
        
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        <Message src="../profil2.png "/>
        <Message src="../imgProfil.png "/>
        
        </div>
        <div className='chatInput'>
        <form>
          <input placeholder='add text'/>
          <button  className="chatInputButton" type="submit">Send Message</button>
        </form>
        <EmojiEmotionsIcon fontSize="large"/>
        
        </div>
        
    </div>
  )
}

export default Chat;