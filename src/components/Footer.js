import React from 'react';
import "../styles/Footer.css";
// import FacebookRoundedIcon from '@material-ui/icons/FacebookRounded';
// import InstagramIcon from '@material-ui/icons/Instagram';





function Footer() {
  return (
    <div className='Footer'>
        <hr></hr>
        {/* <h1>Alf<span className='mariage'>M'brouk</span></h1> */}
        <img  className="footerimage" alt="" src='../logo.png'></img>
        
        {/* <p>made with ❤️</p> */}
        <div className='FooterInfo'>
        <div className='FooterInfo1'>
            <h6>Categories</h6>
            <p>Traiteurs</p>
            <p>Neggafa</p>
            <p>Salles</p>
            <p>Photographes</p>
            <p>Musiciens</p>
            <p>Invitations</p>
            <p>Tailleurs</p>
            
        </div>
        <div className='FooterInfo2'>
            <h6>About</h6>
            <p>Partnerships</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Intellectual Property Claims</p>
            <p>Investor Relations</p>
            
        </div>
        <div className='FooterInfo3'>
            <h6>Support</h6>
            <p>Help & Support</p>
            <p>Trust & Safety</p>
            <p>Selling on AlfM'brouk</p>
            <p>Buying on AlfM'brouk</p>  
        </div>

        <div className='FooterInfo4'>
            <h6>Community</h6>
            <p>Events</p>
            <p>Blog</p>
            <p>Affiliates</p>
            <p>Invite a friend</p> 
            <p>Become a Seller</p>  
        </div>



        </div>
        <hr></hr>
        <div className='FinalFooter'>
        <p className='PFinalFooter'>© AlfM'brouk International Ltd. 2022</p>
        <div className='social'>
           {/* <FacebookRoundedIcon />
           <InstagramIcon/> */}
        </div>
        </div>
        
    </div>
  )
}

export default Footer