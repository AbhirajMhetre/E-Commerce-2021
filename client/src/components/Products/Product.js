import React, { useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Product.css';
import { fetchProducts } from '../../actions/productActions'


const Product = ({ 
    product:{_id, name, image, brand, category,description, price}
}) => {
    return(
        <Card className="card">
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
  
  const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { fetchProducts })(Product);
