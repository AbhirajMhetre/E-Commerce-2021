import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';

import './Product.css';


const Product = ({ 
    product:{_id, name, image, brand, category,description, price}
}) => {
    // console.log(product)
    return(
        <Card className="card" id={_id}>
            <CardActionArea>
                <CardMedia
                    image={image}
                    title="Shoping Item"
                    className="card-image"
                />
                <CardContent className="card-content">
                    
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <AttachMoneyIcon style={{height:'40px', marginBottom:'-12px'}} />{price}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            <u>Brand:</u>{brand}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            <u>Category:</u> {category}
                        </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
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

Product.propTypes = {
    product: PropTypes.object.isRequired,
  };
  

export default Product;