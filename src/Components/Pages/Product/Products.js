import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({bicycle}) => {
    const {name, price, description, _id, img}=bicycle;


    return (
       
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <img src={img} alt=""/>
            <Typography variant="h6" gutterBottom component="div">
               $ {price}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {description}
            </Typography>
            <Link to={`/order/${_id}`}>
              <button
               style={{ backgroundColor: 'goldenrod',  color: 'whitesmoke',
               }}
               >Purches</button>
              </Link>
        </Paper>
    </Grid>
    );
};

export default Products;