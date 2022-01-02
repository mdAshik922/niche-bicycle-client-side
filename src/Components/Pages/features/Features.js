import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import firstFeature from './img/Screenshot_8.png';
import secondFeature from './img/Screenshot_12.png';

const Features = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4">Our facilities and features</Typography>
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid sx={{marginLeft:"10%"}} item xs={2} sm={4} md={4}>
           <img src={firstFeature} alt=""/>
           <Typography variant="h4">
End of trip Servicing
           </Typography>
           <Typography variant="h6">
           We’ve created the perfect citybike to give you the best experience.
           </Typography>
          </Grid>
          <Grid sx={{marginLeft:"5%"}} item xs={2} sm={4} md={4}>
            <img src={secondFeature} alt=""/>
           <Typography variant="h4">
               Individual Route Section 
           </Typography>
           <Typography variant="h6">
           Our experienced travellers will help you to create a perfect root.
           </Typography>
          </Grid>
          
      
      </Grid>
    </Box>
  );
   
};

export default Features;