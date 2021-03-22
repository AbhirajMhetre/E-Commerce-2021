import { FETCH_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, DELETE_PRODUCT, ADD_TO_CART } from './ActionTypes';
import axios from 'axios';


export const fetchProducts = () => async dispatch => {

try {
const res = await axios.get('/api/products');

dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data
});
} catch (err) {
dispatch({
  type: PRODUCT_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status }
});
}

};


export const addProduct = (postData) => async dispatch => {

    const token = localStorage.getItem('token');
    
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    try {
    const res = await axios.post('/api/products', postData, config);
    
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
    } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    }
    
    };


    export const deleteProduct = (id) => async (dispatch) => {
        try {
      
          const token = localStorage.getItem('token');
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      
          await axios.delete(`/api/products/${id}`, config)
      
          dispatch({
            type: DELETE_PRODUCT,
            payload: id
          })
        } catch (err) {
          dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
      }

      export const addToCart = (id, quantity) => async (dispatch, getState) => {

        console.log(id)
        const product = await axios.get(`/api/products/${id}`);
        console.log(product.data)

        dispatch({
          type: ADD_TO_CART,
          payload: 
          { product : {
            _id: product.data._id,
            name : product.data.name,
            image: product.data.image,
            description : product.data.description,
            price: product.data.price,
            quantity: quantity
          }
            
          
          }
        })
       }

