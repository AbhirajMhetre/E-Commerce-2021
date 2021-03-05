import { FETCH_PRODUCTS, PRODUCT_ERROR } from './actionTypes';
import axios from 'axios';

export const fetchProducts = async dispatch => {
    // axios.get(`/api/products/`)
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
    // axios.get('/api/products')
    //     .then(products =>
    //         dispatch({
    //             type: FETCH_ITEM,
    //             payload: products 
    //         })
    //     )
    //     .catch(res=> console.log('rr'))
};