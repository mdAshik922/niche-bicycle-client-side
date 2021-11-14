import { Grid} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';

const HomePageProductShow = () => {
    const [bicycles, setBicycles]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bicycle')
        .then(res=>res.json())
        .then(data =>setBicycles(data.slice(3)))
    },[])

    return (
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {bicycles.map(bicycle =><HomePageProduct
        key={bicycle._id}
        bicycle={bicycle}
        ></HomePageProduct>)}
        </Grid>
      </Box>
    );
};

export default HomePageProductShow;