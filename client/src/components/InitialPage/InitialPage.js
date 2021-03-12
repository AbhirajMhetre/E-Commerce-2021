import React from "react";
import Guest from "../../Images/guest.png";
import User from "../../Images/user.png";
import { Link} from 'react-router-dom';
import './InitialPage.css';


function InitialPage() {
    return (
    <div>

      <h1 className="Title">Welcome to your own virtual shopping complex</h1>
      <div className="InitialPage">

        <div className="Users">
          <img src={User} height="300px" width="300px"></img>
          <Link to="/users/login"><button>Login to continue</button></Link>
        </div>
        <div className="Users">
          <img src={Guest} height="300px" width="300px"></img>
          <Link to="/products"><button>Continue as a guest user</button></Link>
         
        </div>
        
        
      </div>
    </div>
    );
  }
  
  export default InitialPage;