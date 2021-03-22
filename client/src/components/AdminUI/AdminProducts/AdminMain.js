import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchProducts} from '../../../actions/ProductActions';
import "./AdminMain.css";
import Product from './AdminProduct';
import Spinner from '../../Spinner/Spinner';

function Main(props) {

    useEffect(() => {
        props.fetchProducts();
        }, [props.fetchProducts]);
        
        return props.product.loading ? (
            <Spinner/>
            ) : (
            <div className="Main">
            {props.product.products.map(product => (
            <Product key={product._id} product={product}/>
            
            ))}
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
                
                
                export default connect(
                mapStateToProps,
                { fetchProducts }
                )(Main);


