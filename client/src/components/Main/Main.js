import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchProducts} from '../../actions/ProductActions'
import "./Main.css";
import Product from './Product/Product';

import Spinner from '../Spinner/Spinner';

function Main(props) {

    const[ProductSearch, setProductSearch] = useState("");

    useEffect(() => {
        props.fetchProducts();
        }, [props.fetchProducts]);


        return props.product.loading ? (
            <Spinner/>
            ) : (

        <div>
             
             <div className="Nav-Input">
                <input type="text"  placeholder="Search your favourite products" 
                onChange={e => setProductSearch(e.target.value)}/>
                <button>Search</button>
            </div>   

            <div className="Main">
            {props.product.products.filter((product) =>{
                if(ProductSearch == ""){
                    return product
                }else if (product.name.toLowerCase().startsWith(ProductSearch.toLowerCase())){
                    return product
                }
                
            }).map(product => (

            <Product key={product._id} product={product}/>
           
            ))}
         
            </div>

        </div> 
            
            );
            };
  
  
            Main.propTypes = {
                fetchProducts: PropTypes.func.isRequired,
                product: PropTypes.object.isRequired
                };
                
                const mapStateToProps = state => ({
                product: state.product
                });
                
                
        export default connect( mapStateToProps,{ fetchProducts })(Main);

