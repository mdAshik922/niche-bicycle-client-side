import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OrderForm from '../../Form/OrderForm/OrderForm';

const PassProductPrice = () => {
    const [passBicycles, setPassBicycles]=useState([]);

    useEffect(()=>{
        fetch('https://nameless-stream-54785.herokuapp.com/bicycle')
        .then(res=>res.json())
        .then(data =>setPassBicycles(data))
    },[]);

    return (
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* {
         passBicycles.map(bicycle=><OrderForm
         key={bicycle._id}

         ></OrderForm>) 
      } */}
      </Grid>
    </Box>
    );
};

export default PassProductPrice;