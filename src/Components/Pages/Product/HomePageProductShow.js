import { Grid} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomePageProduct from './HomePageProduct';

const HomePageProductShow = () => {
    const [bicycles, setBicycles]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-stream-54785.herokuapp.com/bicycle')
        .then(res=>res.json())
        .then(data =>setBicycles(data.slice(1)))
    },[])

    return (
        <Box sx={{ width: '100%'}}>
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