import React from "react";
import Navbar from "./Navbar/Navbar";
import Image from "../../Images/image.png"
import Main from "../Main/Main";




function Header() {
    return (
      <div className="App">
        <Navbar/>
        
        <img src={Image}></img>
        <Main/>
      
      </div>
    );
  }

  export default Header