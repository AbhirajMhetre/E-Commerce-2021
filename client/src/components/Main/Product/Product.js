import React from 'react';
import ProductImage from '../../../Images/shoes.png'
import './Product.css';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';



function Product({product:{_id, name, image, brand, category,description, price}})  {

  const dispatch = useDispatch()
  let product = null;

    return (
     
            
        <div className="Item-card">
        <img src={image} width="400px" className="Item-image"></img>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <p>{description}</p>
        <div>
            <button>Buy Now</button>
            
            <button onClick={() =>  {
              
               dispatch({type: 'ADD_TO_CART', 
            payload: {product : {_id,name,price,description,image}}}); 
            
            }}>Add to Cart</button>
        </div>
        </div>
      
    );

  }

  Product.propTypes = {
    product: PropTypes.object.isRequired,
    };

  export default Product;



  //<div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
