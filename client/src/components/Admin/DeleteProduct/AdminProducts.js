import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productActions';

import './AdminProducts.css';
import AdminProduct from './AdminProduct';


// const AdminProducts = ({ fetchProducts, product: { products, loading } }) => {
  const AdminProducts = (props ) => {
    useEffect(() => {
    props.fetchProducts();
  }, [props.fetchProducts]);
   
    return props.product.loading ? (
    <div>loading..</div>
  ) : (
        <div className="items">
            {props.product.products.map(product => (
            <AdminProduct key={product._id} product={product}/>
            
        ))}
        </div>
      );
};

AdminProducts.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});


export default connect(
  mapStateToProps,
  { fetchProducts }
)(AdminProducts);
