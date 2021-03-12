import Main1 from "../../../Images/shoponline.png";
import React, { useState, createContext, useEffect } from "react";
import "./Navbar.css";
import Logo from '../../../Images/logo.png';
import Cart from '../../../Images/cart.png';
import Main from "../../Main/Main";
import { Link} from 'react-router-dom';

export const SearchVal = createContext();

function Navbar() {

  const[searchItem, setSearchItem] = useState("");


    
    return (
     <div>
      <SearchVal.Provider value={searchItem}>
        <div className="Nav">
         
        <Link to="/products"><img src={Main1} width='200px' height='70px'></img></Link>
            
            <div className="">
                <h2>Brace Yourselves, Black Friday Sale is Coming!!</h2>
            </div>

            <div className="User-cart">
            <Link to="/users/login"><img src={Logo} width='40px' height='40px'></img>User</Link>
               <Link to="/cart"> <img src={Cart} width='40px' height='40px'></img>Cart</Link>
            </div>
        </div>
       
        </SearchVal.Provider>
      </div>
    );

   
  }

  export default Navbar;
  