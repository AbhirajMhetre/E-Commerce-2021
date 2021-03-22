const initState = {
    products: [],
    totalPrice: 0,
    
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
   
    switch(action.type){
        case 'ADD_TO_CART':
            console.log(action.payload.product._id);
            const check = state.products.find(prd => prd._id === action.payload.product._id);
          if(check){
               return state;
          }else{
                const Tprice = state.totalPrice + action.payload.product.price;
                console.log(Tprice);
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

