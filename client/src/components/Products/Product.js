import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button, FormControl, NativeSelect } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Product.css';
import { addToCart } from '../../actions/cartActions';


const Product = ({ 
    product:{_id, name, image, brand, category,description, price},
    addToCart
}) => {
    const [qty, setQty] = useState(1)
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
                    
                    <Typography variant="h6" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="h6">
                        <u>Select Quantity</u> :    
                    <FormControl style={{marginLeft:'20px'}}>
                            <NativeSelect
                                value={qty}
                                onChange={(e) =>
                                   setQty(e.target.value)
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
                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={()=>
                            {
                                addToCart(_id,qty)
                                // setQty(null)
                            }
                        }
                >Add To Cart</Button>
                <Button variant="outlined" color="primary">Buy Now</Button>
            </CardActions>
        </Card>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
  };
  

export default connect(null, { addToCart })(Product);
