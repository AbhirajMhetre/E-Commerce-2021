import React from 'react';


import './Cart.css';
import CartItems from '../../components/CartItems/CartItems';

const Cart = () => {
    return(
        <>
            <div className="cart">
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
                <CartItems/>
            </div>
        </>
    );
}

export default Cart;