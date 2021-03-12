import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productActions';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './AdminProducts.css';
import AdminProduct from '../DeleteProducts/AdminProduct';
import Spinner from '../../Spinner/Spinner';



  const AdminProducts = (props ) => {
      useEffect(() => {
      props.fetchProducts();
    }, [props.fetchProducts]);

    const[searchInput, setSearchInput] = useState("");

    const searchInputHandler = (event) => {
      setSearchInput(event.target.value)
    }

    return props.product.loading ? (
      <Spinner />
      ) : (
      <>
        <div className="search"> 
            <input 
                type="text"
                className="search-input"
                placeholder="Search.."
                value={searchInput}
                onChange={searchInputHandler}
            />
            <div className="search-icon">
                <IconButton>
                    <SearchIcon /> 
                </IconButton>  
            </div>
                      
        </div>    
        <div className="items">
          {props.product.products.filter((product) =>{
              if(searchInput === ""){
                  return product
              }else if (product.name.toLowerCase().includes(searchInput.toLowerCase())){
                  return product
              }
              
          }).map(product => (
            <AdminProduct key={product._id} product={product}/>
          ))}
       
        </div>
      </>
  );
};

AdminProducts.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});


export default connect(mapStateToProps, { fetchProducts })(AdminProducts);
