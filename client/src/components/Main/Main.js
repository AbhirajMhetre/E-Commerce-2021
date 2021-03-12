import React, {useEffect,useContext, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchProducts} from '../../actions/ProductActions'
import "./Main.css";
import Product from './Product/Product';
import SearchVal from '../Header/Navbar/Navbar';



function Main(props) {

    const[searchItem, setSearchItem] = useState("");

    const val = useContext(SearchVal);
   console.log(val);

    useEffect(() => {
        props.fetchProducts();
        }, [props.fetchProducts]);


        return props.product.loading ? (
            <div>loading..</div>
            ) : (

             <div>
             
             <div className="Nav-Input">
                <input type="text"  placeholder="Search your favourite products" 
                onChange={e => setSearchItem(e.target.value)}/>
                <button>Search</button>
            </div>   

            <div className="Main">
            {props.product.products.filter((product) =>{
                if(searchItem == ""){
                    return product
                }else if (product.name.toLowerCase().startsWith(searchItem.toLowerCase())){
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