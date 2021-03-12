import { combineReducers } from 'redux';
import product from './product';
import CartReducer from './CartReducer';


export default combineReducers({
  product,
  CartReducer
});


// import { combineReducers } from 'redux';
// import ProductsReducer from './ProductsReducer';

// export default combineReducers({
// products: ProductsReducer
// });