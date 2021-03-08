import { FETCH_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT } from './actionTypes';
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


export const addProduct = formData => async dispatch => {
  console.log(formData)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log('before');
    const res = await axios.post('/api/products', formData, config);
    console.log('after');
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
    // console.log(formData)
    
    // dispatch(alert('PRODUCT ADDED'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}