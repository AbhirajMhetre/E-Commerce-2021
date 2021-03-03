import React from 'react';
import ShoppingImg from '../../assets/images/shopping.PNG';
import { Typography } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import './CartItems.css';

const CartItems = () => {
    return(
        <>
            <div className="cart">
                <div className="cart-item">
                    <div>
                        <img 
                            src={ShoppingImg} 
                            alt="img"
                            className="item-image"                        
                        /> 
                    </div>
                    <div className="item-details">
                        <Typography gutterBottom variant="h5" component="h2">
                            Shopping Item Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Shopping Item Description
                        </Typography>
                    </div>
                    <div className="item-price">
                        <Typography gutterBottom variant="h5" component="h2">
                            <AttachMoneyIcon style={{height:'40px', marginBottom:'-12px'}} />20.00
                        </Typography>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default CartItems;