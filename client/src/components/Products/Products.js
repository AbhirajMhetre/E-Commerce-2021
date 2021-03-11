import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

import './Products.css';
import Product from './Product';


// const Products = ({ fetchProducts, product: { products, loading } }) => {
  const Products = (props) => {
    useEffect(() => {
    props.fetchProducts();
  }, [props.fetchProducts]);
    // console.log(props);
    return props.product.loading ? (
    <div>loading..</div>
  ) : (
        <div className="items">
            {props.product.products.map(product => (
            <Product key={product._id} product={product}/>  
        ))}
        </div>
      );
};

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});


export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
