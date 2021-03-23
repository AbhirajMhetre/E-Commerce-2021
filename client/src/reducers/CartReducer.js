const initState = {
    products: []
    
}

const CartReducer = (state = initState, action) => {
  
    switch(action.type){
        case 'ADD_TO_CART':
            
            const check = state.products.find(prd => prd._id === action.payload.product._id);
           // console.log(action.payload.product);
          if(check){
           
               return {
                   ...state,
                    products: state.products.map((pr) =>
                    pr._id === check._id ? action.payload.product : pr
              ),     
               }
          }else{
                
                return {
                    ...state, products: [...state.products, action.payload.product]
                }
            }

        case 'DELETE':
                const filtered = state.products.filter(product => product._id !== action.payload);
                return {
                    ...state,
                    products: filtered,          
        }

        default:
            return state;
    }
}

export default CartReducer;



// findPro = state.products.find(product => product._id === action.payload);

