import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './AdminNavbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    return(
        <>
            <AppBar className="appbar" style={{backgroundColor:'#0f1111'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                      <Typography variant="h5">E-Commerce</Typography>  
                    </IconButton>
                    <div className='navbar-text'>
                       <Typography variant="h5">Welcome to Admin Panel !! </Typography> 
                    </div>
                    <div>
                        <NavLink exact to="/users/login" style={{ textDecoration: 'none', color:'inherit' }}>
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                onClick={()=>{
                                    localStorage.removeItem("cartItems");
                                    localStorage.removeItem("token")
                                }}
                            >
                                Log Out
                            </Button>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;