import React from 'react';
import ProductImage from '../../../Images/shoes.png'
import './AdminProduct.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {deleteProduct} from '../../../actions/ProductActions';



function Product({
    product:{_id, name, image, brand, category,description, price},
    deleteProduct
    }) {
    return (
     
            
        <div className="Item-card">
        <img src={image} width="400px" className="Item-image"></img>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <p>{description}</p>
        <div>
            <button onClick={() => deleteProduct(_id)}>Delete</button>
            
        </div>
        </div>
      
    );

  }

  Product.propTypes = {
    product: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired
    };

  export default connect(null, { deleteProduct })(Product);



  //<div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
