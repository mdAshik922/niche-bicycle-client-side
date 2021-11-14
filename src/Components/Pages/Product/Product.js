import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Products from './Products';

const Product = () => {
    const [bicycles, setBicycles]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/bicycle')
        .then(res=>res.json())
        .then(data =>setBicycles(data))
    },[])

    return (
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {
           bicycles.map(bicycle =><Products key={bicycle._id}
           bicycle={bicycle}
           ></Products>
        
           )
       }
      </Grid>
    </Box>
    );
};

export default Product;