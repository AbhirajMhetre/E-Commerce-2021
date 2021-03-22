const initState = {
    products: [],
    totalPrice: 0,
    
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
   
    switch(action.type){
        case 'ADD_TO_CART':
            //console.log(state);
            const check = state.products.find(prd => prd._id === action.payload.product._id);
            console.log(action.payload.product);
          if(check){
            const Tprice = state.totalPrice + (action.payload.product.quantity * action.payload.product.price);
               return {
                   ...state,
                   products: state.products.map((x) =>
                x._id === check._id ? action.payload.product : x
              ),
                   totalPrice: Tprice
               }
          }else{
                const Tprice = state.totalPrice + action.payload.product.price;
                
                return {
                    ...state, products: [...state.products, action.payload.product], totalPrice: Tprice
                }
            }

        case 'DELETE':
           
                findPro = state.products.find(product => product._id === action.payload);
                const filtered = state.products.filter(product => product._id !== action.payload);
                return {
                    ...state,
                    products: filtered,
                    totalPrice: state.totalPrice - findPro.price
        }

        

        default:
            return state;
    }
}

export default CartReducer;

