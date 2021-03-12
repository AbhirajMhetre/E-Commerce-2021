import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AdminProduct.css';
import { deleteProduct } from '../../../actions/productActions';


const AdminProduct = ({ 
    product:{_id, name, image, brand, category,description, price},
    deleteProduct
}) => {
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
                            Brand:  {brand}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Category: {category}
                        </Typography>
                    
                    <Typography variant="h6" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent:'center'}}>
                <Button variant="contained" color="secondary" onClick={() => deleteProduct(_id)}>DELETE PRODUCT</Button>
            </CardActions>
        </Card>
    );
}

AdminProduct.propTypes = {
    product: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };
  

export default connect( null, { deleteProduct })(AdminProduct);
