import React, { useEffect } from 'react';
import ShoppingImg from '../../assets/images/shopping.PNG';
import { Grid, IconButton, Typography } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './CartItems.css';
import { addToCart, removeFromCart } from '../../actions/cartActions';

const CartItem = (props) => {
    //const pid = localStorage.getItem('pid'); 
    useEffect(() => {
          props.addToCart()
      }, [props.addToCart])
    
    //console.log(props);
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
                        <IconButton onClick={() => props.removeFromCart(item.product)}>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </Grid>
                    
                </Grid>
            ))}
                
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