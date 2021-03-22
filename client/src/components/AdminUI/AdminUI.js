import Main1 from "../../Images/shoponline.png";
import Main from "../Main/Main";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./AdminUI.css";
import {addProduct} from "../../actions/ProductActions";
import { connect } from 'react-redux';
import AdminMain from "./AdminProducts/AdminMain";
import { Link } from 'react-router-dom';


function AdminUI({addProduct}) {

    const [productData, setProductData] = useState({

        name: '',
        image : '',
        price:'',
        brand:'',
        category:'',
        description:''

      });

    const onChange = e =>
    setProductData({ ...productData, [e.target.name]: e.target.value });

    const post = productData;

    const onSubmit = e => {
        e.preventDefault();
        e.target.reset();
        addProduct(post);
        console.log(post);
        
  
      };
    


    return (
      <div>
        
        <div className="AdminUI">
         
            <img src={Main1} width='200px' height='70px'></img>
            
           

            <div className="User-cart-1">
               <Link to="/users/login"><h4 style={{color:"white"}}>Logout</h4> </Link>
               <Link to="/admin-ui"><h4 style={{color:"white"}}>Add Products</h4></Link> 
            </div>
        </div>

        <form onSubmit={onSubmit}>
            <h1>Add Products</h1>
        <div className="Batch">
          <div className="Batch1">
            <div>
                <label>Product Name : </label><br/>
                <input type="text" name="name" onChange={onChange}/>
            </div>
            <div>
                <label>Image-Path : </label><br/>
                <input type="text" name="image" onChange={onChange}/>
            </div>
          </div>
          <div className="Batch2">
            <div>
                <label>Price : </label><br/>
                <input type="text" name="price" onChange={onChange}/>
            </div>
          
          
            <div>
                <label>Brand : </label><br/>
                <input type="text" name="brand" onChange={onChange}/>
            </div>
          </div>
          <div className="Batch3">
            <div>
                <label>Category : </label><br/>
                <input type="text" name="category" onChange={onChange}/>
            </div>
            <div>
                <label>Description : </label><br/>
                <input type="text" name="description" onChange={onChange}/>
            </div>
          </div>
          
        </div>
            <br/>
          
            <div>
                
            <input type="submit"  className="SubmitButton" />
            </div>
            
        </form> 
        
        <AdminMain/>
      </div>
    );
  }

  AdminUI.propTypes = {
    addProduct: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    product: state.product
    });
 

  export default connect(mapStateToProps, { addProduct })(AdminUI);

