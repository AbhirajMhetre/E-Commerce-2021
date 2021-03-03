import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import './ItemCard.css';
import ShoppingImg from '../../assets/images/shopping.PNG';


const ItemCard = () => {
    return(
        <Card className="card">
            <CardActionArea>
                <CardMedia
                    image={ShoppingImg}
                    title="Shoping Item"
                    className="card-image"
                />
                <CardContent className="card-content">
                    
                        <Typography gutterBottom variant="h5" component="h2">
                            Shopping Item Name
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <AttachMoneyIcon style={{height:'40px', marginBottom:'-12px'}} />20.00
                        </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        Shopping Item Description
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" color="primary">Add To Cart</Button>
                <Button variant="outlined" color="primary">Buy Now</Button>
            </CardActions>
        </Card>
    );
}

export default ItemCard;