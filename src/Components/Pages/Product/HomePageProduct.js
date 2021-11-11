import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const homePageProduct = ({bicycle}) => {
    const {name, price, description, img}=bicycle;

   
    return (
        <Grid sx={{margin:2}} item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{  py: 5 }}>
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
          <Link to="/explore">
          <Button variant="contained">Purchase </Button></Link>
        </Paper>
    </Grid>
    );
};

export default homePageProduct;