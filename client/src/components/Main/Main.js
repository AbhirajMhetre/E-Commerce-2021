import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchProducts} from '../../actions/ProductActions'
import "./Main.css";
import Product from './Product/Product';

function Main(props) {

    useEffect(() => {
        props.fetchProducts();
        }, [props.fetchProducts]);
        return props.product.loading ? (
            <div>loading..</div>
            ) : (
            <div className="Main">
            {props.product.products.products.map(product => (
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


//   <div className="Item-card">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h2>Item Name</h2>
//                 <h1>999 Rs.</h1>
//                 <p>Order description and specification</p>
//                 <div>
//                     <button>Buy Now</button>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//             <div className="Item-card">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h2>Item Name</h2>
//                 <h1>999 Rs.</h1>
//                 <p>Order description and specification</p>
//                 <div>
//                     <button>Buy Now</button>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//             <div className="Item-card">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h2>Item Name</h2>
//                 <h1>999 Rs.</h1>
//                 <p>Order description and specification</p>
//                 <div>
//                     <button>Buy Now</button>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//             <div className="Item-card">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h2>Item Name</h2>
//                 <h1>999 Rs.</h1>
//                 <p>Order description and specification</p>
//                 <div>
//                     <button>Buy Now</button>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>


// <div className="Main">
            
// <Product/>
// <Product/>
// <Product/>
// <Product/>

// </div>