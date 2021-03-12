import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import "./Cart.css";
import Navbar from '../Header/Navbar/Navbar';

const Cart = () => {

    const { products, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();
    console.log(products.name);
    //console.log(products.products.name)

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
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart





// <div className="container">
//                 <h1>Your Cart</h1>
//                 {products.length > 0 ? <div>
//                     <div>
//                         Add more Items to your cart
//                     </div>
                    // <div>
                    //  {products.map(product => (
                    //      <div key={product_id}>
                    //      {product.name}
                    //      {product.description}
                    //      {product.price}
                    //      </div>
                    //  ))}
                    // </div>
                    
//                     </div> : 'Your cart is empty'}
//             </div>
