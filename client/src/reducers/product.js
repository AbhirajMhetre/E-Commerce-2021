import { FETCH_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes';

const initialState = {
    products: [],
    product: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    console.log(state);
    switch (type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: payload,
          loading: false
        };
      case PRODUCT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
        case ADD_PRODUCT:
          return {
            ...state,
            products: [payload, ...state.products],
            loading: false
          };
        case GET_PRODUCT:
          return {
            ...state,
            post: payload,
            loading: false
          };
        case DELETE_PRODUCT:
          
          return {
            ...state,
            products: state.products.filter(product => product._id !== payload),
            loading: false
          };
      default:
        return state;
    }
  }