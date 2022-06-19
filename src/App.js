import React  from 'react';
// ,{useEffect}
// import '../src/styles/styles.css';
// import '../src/styles/styles.css';
import Home from "./components/Home";
import Footer from "./components/Footer";


// import Navbar from "./components/Navbar";
import NavbarSignUp from "./components/NavbarSignUp"
import Messages from "./components/Messages";
import SwitchToSelling from "./components/SwitchToSelling";



import {BrowserRouter, Routes, Route} from "react-router-dom";



  function App() {

   

  return (
    <div className="App">
        
        <NavbarSignUp/>
        

        
        <BrowserRouter>                     
                <Routes>
                  <Route path="/messages" element={<Messages />} />                        
                  <Route path="/" element={ <Home />} /> 
                  <Route path="/Offer" element={<SwitchToSelling />} />                    
                </Routes>     
        </BrowserRouter>
        <Footer />


    </div>
  );
}

export default App;