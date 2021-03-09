import Main from "../../../Images/shoponline.png";
import React from "react";
import "./Navbar.css";
import Logo from '../../../Images/logo.png';
import Cart from '../../../Images/cart.png';


function Navbar() {
    return (
      <div>
        <div className="Nav">
         
            <img src={Main} width='200px' height='70px'></img>
            
            <div className="Nav-Input">
                <input type="text" name="" value="" placeholder="Search your favourite products"/>
                <button>Search</button>
            </div>

            <div className="User-cart">
               <a href="/users/login"><img src={Logo} width='40px' height='40px'></img>User</a> 
                <a><img src={Cart} width='40px' height='40px'></img>Cart</a>
            </div>
        </div>
      </div>
    );
  }

  export default Navbar;