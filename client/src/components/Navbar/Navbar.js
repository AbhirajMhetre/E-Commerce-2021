import React, {  } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Navbar.css'
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {
    return(
        <>
            <AppBar className="appbar" style={{backgroundColor:'#0f1111'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                      <NavLink to="/" style={{ textDecoration: 'none', color:'inherit' }}>E-Commerce</NavLink>  
                    </IconButton>
                    <div className="search"> 
                        <input 
                            type="text"
                            className="search-input"
                        />
                        <div className="search-icon">
                            <IconButton>
                                <SearchIcon /> 
                            </IconButton>  
                        </div>
                        
                    </div>
                    <div>
                        <NavLink exact to="/sign-in" style={{ textDecoration: 'none', color:'inherit' }}>
                        <IconButton color="inherit">
                          <AccountCircle />
                        </IconButton>
                        </NavLink>
                    </div>
                    <div>   
                        <IconButton color="inherit">
                        <NavLink exact to="/cart" style={{ textDecoration: 'none', color:'inherit' }}>
                            <ShoppingCartIcon/></NavLink>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;