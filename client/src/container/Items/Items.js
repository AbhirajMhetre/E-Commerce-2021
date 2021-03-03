import React from 'react';
import { Grid } from '@material-ui/core';

import './Items.css'
import ItemCard from '../../components/Card/ItemCard'; 


const Items = () => {
    return(
        <div className="item">
        <Grid container xs={12}>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
            <Grid item xs={3}>
                <ItemCard/>
            </Grid>
        </Grid>
            
            {/* <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/> */}

        </div>
    );
}

export default Items;