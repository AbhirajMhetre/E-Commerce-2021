import { ADD_ITEM_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    totalPrice: 0
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
      
        case ADD_ITEM_TO_CART:
            const existItem = state.cartItems.find((x) => x.product === payload.product)
            
            if (existItem) {
              return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                  x.product === existItem.product ? payload : x
                ),
              }
            } else {
            return {
                ...state,
                cartItems: [...state.cartItems, payload],
              }
            }
            
        case REMOVE_FROM_CART:
            return {
              ...state,
              cartItems: state.cartItems.filter((x) => x.product !== payload),
            }   
        default:
        return state;
    }
  }