import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Navbar.css'
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
                      <NavLink to="/products" style={{ textDecoration: 'none', color:'inherit' }}>E-Commerce</NavLink>  
                    </IconButton>
                    <div className='navbar-text'>
                       <Typography variant="h5">Holi Festival Sale is started!! </Typography> 
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