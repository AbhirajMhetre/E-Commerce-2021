import React, { useEffect } from 'react';
import { Button, FormControl, Grid, NativeSelect, Typography } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './CartItems.css';
import { addToCart, removeFromCart } from '../../actions/cartActions';

const CartItem = (props) => {
    useEffect(() => {
          props.addToCart()
      }, [props.addToCart])
    
    return(
        <>
            <div className="cart">
            {props.cart.cartItems.map((item)=>(
                <Grid container className="cart-item" key={item.product}>
                    
                    <Grid item xs={5}>
                        <img 
                            src={item.image} 
                            alt="img"
                            className="item-image"                        
                        /> 
                    </Grid>
                    <Grid item xs={4} className="item-details">
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <AttachMoneyIcon style={{height:'40px', marginBottom:'-12px'}} />{item.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className="buttons">
                        <FormControl> 
                            <NativeSelect
                                value={item.qty}
                                onChange={(e) =>
                                   props.addToCart(item.product, Number(e.target.value))
                    
                                }
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </NativeSelect>
                        </FormControl>
                        <Button onClick={() => props.removeFromCart(item.product)}>
                            <DeleteForeverIcon/>
                        </Button>
                    </Grid>  
                     {/* {console.log(item.qty)} */}
                </Grid>
                
            ))}
            <h2>
                Subtotal ({props.cart.cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              <div style={{fontWeight:'700', fontSize:'25px'}}>
              $
              {props.cart.cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              </div>
            </div>
        </>
    );
}

CartItem.propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    cartItems: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    cart: state.cart,
    cartItems: state.cartItems
  });
  
export default connect(mapStateToProps, { addToCart, removeFromCart })(CartItem);