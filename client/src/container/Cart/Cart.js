import React from 'react';

import './Cart.css';
import CartItems from '../../components/CartItems/CartItems';
import Navbar from '../../components/Navbar/Navbar';


const Cart = () => {
    return(
        <>
            <Navbar/>
            <div className="cart">
                <CartItems/>
            </div>
        </>
    );
}
  
export default Cart;