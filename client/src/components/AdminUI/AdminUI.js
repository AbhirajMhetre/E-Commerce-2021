import Main from "../../Images/shoponline.png";
import React, {useState} from "react";
import "./AdminUI.css";
import {addProduct} from "../../actions/ProductActions";
import { connect } from 'react-redux';
//import axios from 'axios';

//import Logo from '../../Images/logo.png';
// import IMG from '../../Images/sales.png';
// import IMG2 from '../../Images/sales2.png'
// import ProductImage from '../../Images/shoes.png'



function AdminUI({addProduct}) {

    const [productData, setProductData] = useState({

        name: '',
        imagePath : '',
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

        addProduct(post);
        console.log(post);
        
  
      };
    


    return (
      <div>
        <div className="AdminUI">
         
            <img src={Main} width='200px' height='70px'></img>
            
            <div className="Nav-Input">
                <input type="text" name="" value="" placeholder="Search your favourite products"/>
                <button>Search</button>
            </div>

            <div className="User-cart-1">
               <a href="/auth"><h4 style={{color:"white"}}>Admin</h4></a> 
                <a><h4 style={{color:"white"}}>Add Products</h4></a>
            </div>
        </div>

        <form onSubmit={onSubmit}>
            <h1>Add Products</h1>
            <div>
                <label>Product Name : </label><br/>
                <input type="text" name="name" onChange={onChange}/>
            </div>
            <div>
                <label>Image-Path : </label><br/>
                <input type="text" name="imagePath" onChange={onChange}/>
            </div>
            <div>
                <label>Price : </label><br/>
                <input type="text" name="price" onChange={onChange}/>
            </div>
            <div>
                <label>Brand : </label><br/>
                <input type="text" name="brand" onChange={onChange}/>
            </div>
            <div>
                <label>Category : </label><br/>
                <input type="text" name="category" onChange={onChange}/>
            </div>
            <div>
                <label>Description : </label><br/>
                <input type="text" name="category" onChange={onChange}/>
            </div>
            <br/>
            <div>
                
                <input type="submit" defaultValue="Add product"/>
            </div>
            
        </form>
        
      </div>
    );
  }

  const mapStateToProps = state => ({
    product: state.product
    });
 

  export default connect(mapStateToProps, { addProduct })(AdminUI);













//   <div className="AdminMain">
//             <div className="Orders">
//                <h1>ORDERS RECIEVED</h1>
//                <div className="Item-card-1">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h3>Order ID: #10436</h3>
//                 <p>Item Name</p>
//                 <p>Price: 2999</p>
//                 <p>Customer Name : Virat Kohli</p>
//                 <p>Customer Address : XYZ Road, Gurgaon, India</p>
//                 <div>
//                     <button>Dispatch Item</button>
//                 </div>
                
//             </div>
//             <div className="Item-card-1">
//                 <div style={{ backgroundImage: `url(${ProductImage})` }} className="Item-image"></div>
//                 <h3>Order ID: #10986</h3>
//                 <p>Item Name</p>
//                 <p>Price: 1999 Rs.</p>
//                 <p>Customer Name : Rohit Sharma</p>
//                 <p>Customer Address : XYZ Road, Colaba, Mumbai</p>
//                 <div>
//                     <button>Dispatch Item</button>
//                 </div>
                
//             </div>
//             </div>
            
//             <div className="AdminImages">
//                 <h1>SALES OVERVIEW</h1>
//                 <img src={IMG} width='700px'></img>
//                 <img src={IMG2} width='700px'></img>
//             </div>
//         </div>


 //props.history.push('/products')


       

        
       
    //    axios.post('/api/products',productData).then(res => {
       
    //     console.log(res);
    //    }).catch(err => {
    //      console.log(err)
    //    })