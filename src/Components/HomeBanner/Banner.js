import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Link } from 'react-router-dom';
import banner from './banner.png';
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'gray', color: 'whitesmoke' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={5}>
        <img style={{borderRadius: '25px'}} src={banner} alt=""/>
        </Grid>
        <Grid sx={{marginLeft: 5}} item xs={9} sm={8} md={6}>
         <Typography variant="h2">

         Direct to Consumer Pricing
         </Typography>
         <Typography variant="h4">

         Ride More For Less
         </Typography>
         <Typography variant="h6">

         Why buy from Bikes Online? The bikes in our online bike shop are
          often half the price of comparable bikes in the market, and that
           is due to our direct to consumer business model. We source high-quality 
           bikes from the manufacturer, cut out the middlemen, and pass on the savings
            to you - where they belong. Add to that our free, fast delivery and local support and 
         you can rest assured knowing you are getting the best deal on your new bike.
         </Typography>
   <Link to="/"> <Button sx={{backgroundColor: 'goldenrod'}} >Learn More</Button></Link>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Banner;