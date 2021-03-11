import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Products from '../Products/Products'



const Navbar = (props) => {
    const [search, setSearch] = useState('');

    const handleInput = event => {
        setSearch(event.target.value)
        console.log(search);
    }

    return(
        <>
            <AppBar className="appbar" style={{backgroundColor:'#0f1111'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                      <NavLink to="/products" style={{ textDecoration: 'none', color:'inherit' }}>E-Commerce</NavLink>  
                    </IconButton>
                    <div className="search"> 
                        <input 
                            type="text"
                            className="search-input"
                            placeholder="Search.."
                            value={search}
                            onChange={handleInput}
                        />
                        <div className="search-icon">
                            <IconButton>
                                <SearchIcon /> 
                            </IconButton>  
                        </div>
                        
                    </div>
                    <div>
                        <NavLink exact to="/users" style={{ textDecoration: 'none', color:'inherit' }}>
                        <IconButton color="inherit">
                          <AccountCircle />
                        </IconButton>
                        </NavLink>
                    </div>
                    <div>   
                        <IconButton color="inherit">
                        <NavLink exact to="/orders" style={{ textDecoration: 'none', color:'inherit' }}>
                            <ShoppingCartIcon/></NavLink>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;