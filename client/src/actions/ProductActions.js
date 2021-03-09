import { FETCH_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT } from './ActionTypes';
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

