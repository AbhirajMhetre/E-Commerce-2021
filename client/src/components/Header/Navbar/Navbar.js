import Main1 from "../../../Images/shoponline.png";
import React, { useState, createContext, useEffect } from "react";
import "./Navbar.css";
import Logo from '../../../Images/logo.png';
import Cart from '../../../Images/cart.png';
import Main from "../../Main/Main";
import { Link} from 'react-router-dom';



function Navbar() {
 
    return (
     <div>
    
        <div className="Nav">
         
        <Link to="/products"><img src={Main1} width='200px' height='70px'></img></Link>
            
            <div className="">
                <h2>Brace Yourselves, Black Friday Sale is Coming!!</h2>
            </div>

            <div className="User-cart">
            <Link to="/users/login"><img src={Logo} width='40px' height='40px'></img>Logout</Link>
               <Link to="/cart"> <img src={Cart} width='40px' height='40px'></img>Cart</Link>
            </div>
        </div>
       
       
      </div>
    );

   
  }

  export default Navbar;
  