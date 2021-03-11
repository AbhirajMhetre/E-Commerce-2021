import { ADD_ITEM_TO_CART, REMOVE_FROM_CART } from './actionTypes';

import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
    const  { data } = await axios.get(`/api/products/${id}`)
    console.log('Action', data);
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
      },
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }
  
  export const removeFromCart = (id) => (dispatch, getState) => {
      
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }