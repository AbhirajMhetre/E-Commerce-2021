import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import "./Cart.css";
import Navbar from '../Header/Navbar/Navbar';

const Cart = () => {
    
    const { products, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();
  

    return (
        <div className="cart">
            <Navbar/>
            <div className="container">
                <h1>Your Cart</h1>
                <div className="row">
                <div>
                 {products.map(product => (
                     <div key = {product._id} className="ProductDisplay">
                        <div>
                            <img src={product.image} width='300px' height='150px'></img>
                        </div>
                        <div className="ProductData">
                            <div><h2>Name : {product.name}</h2></div>
                            
                            <div><h2>Price : {currencyFormatter.format(product.price, {code: 'USD'})}</h2></div>
                            <div onClick={() => dispatch({type:'DELETE', payload: product._id})}>
                            
                                <button>Delete Item</button>
                            
                            </div>
                            
                        </div>
                        
                     </div>
                 ))}
                </div>
                        <div className="TotalPrice">
                            <h2>Total Price : </h2>
                            <h2>{currencyFormatter.format(totalPrice, {code: 'USD'})}</h2>
                            {totalPrice <= 0 ? null : <button onClick={() => {alert("Order Successful")}} style={{backgroundColor:"green"}}>Checkout</button>}
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
