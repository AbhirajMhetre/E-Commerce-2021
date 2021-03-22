import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch, connect} from "react-redux";
import currencyFormatter from "currency-formatter";
import "./Cart.css";
import Navbar from '../Header/Navbar/Navbar';
import {addToCart} from '../../actions/ProductActions';
import PropTypes from 'prop-types';
import product from '../../reducers/product';

const Cart = (props) => {
    
    useEffect(() => {
        props.addToCart()
    }, [props.addToCart])

    const { products, totalPrice } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch();
    console.log(props)

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
                            <div className="Quantity">
                            {product.quantity > 1 ? <h2 onClick={() => props.addToCart(product._id,product.quantity - 1)}>-</h2>: null}
                               <h2 style={{fontWeight:'bold'}} className="ProductQuantity"> {product.quantity}</h2>
                               <h2 style={{fontWeight:'bold'}} onClick={ () => props.addToCart(product._id,product.quantity + 1)}>+</h2>
                            </div> 
                        </div>
                        
                        
                     </div>
                 ))}
                </div>
                        <div className="TotalPrice">
                            <h2>Total Price : </h2>
                          
                            <h1 className="Tprice">${products
                                .reduce((acc, product) => acc + product.quantity * product.price, 0)
                                .toFixed(2)}</h1>
                            
                                
                        </div>
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    addToCart: PropTypes.func.isRequired,
    
  };

const mapStateToProps = state => ({
    CartReducer: state.CartReducer
  });
  
export default connect(mapStateToProps, { addToCart })(Cart);


//                            {totalPrice <= 0 ? null : <button onClick={() => {alert("Order Successful")}} style={{backgroundColor:"green"}}>Checkout</button>}

//<h2>{currencyFormatter.format(totalPrice, {code: 'USD'})}</h2>