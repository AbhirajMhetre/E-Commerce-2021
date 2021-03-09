import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProduct } from '../../../actions/productActions';
import './CreateProduct.css'

const CreateProduct = ({ addProduct }) => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        brand: '',
        category: ''
    });

    const { 
        name,
        price,
        description,
        image,
        brand,
        category
     } = formData;

    const onChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
    }

    return(
        <div className='create-product'>
            <div className="paper">
                <form className="form" noValidate>
                    <Grid container spacing={2} style={{marginBottom:'20px'}}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="name"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          id="name"
                          label="ProductName"
                          autoFocus
                          value={name}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="price"
                          name="price"
                          variant="outlined"
                          required
                          fullWidth
                          id="price"
                          label="Price"
                          autoFocus
                          value={price}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="description"
                          name="description"
                          variant="outlined"
                          required
                          fullWidth
                          id="description"
                          label="Description"
                          autoFocus
                          value={description}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="image"
                          name="image"
                          variant="outlined"
                          required
                          fullWidth
                          id="image"
                          label="Image"
                          autoFocus
                          value={image}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="brand"
                          name="brand"
                          variant="outlined"
                          required
                          fullWidth
                          id="brand"
                          label="Brand"
                          autoFocus
                          value={brand}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="category"
                          name="category"
                          variant="outlined"
                          required
                          fullWidth
                          id="category"
                          label="category"
                          autoFocus
                          value={category}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit"
                      onClick={onSubmit}
                    >
                      Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
}

CreateProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
  });

export default connect(mapStateToProps, { addProduct })(CreateProduct);