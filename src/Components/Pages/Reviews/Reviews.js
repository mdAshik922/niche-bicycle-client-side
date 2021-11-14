import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data =>setReviews(data))
    },[])
    return (

        <Box sx={{ margin: 5,  flexGrow: 1 }}>
          <Typography sx={{color: 'goldenrod'}} variant="h4">
            Coustomar Reviews
          </Typography>
        <Grid sx={{marginTop: '15px'}} container spacing={2} columns={16}>
          {
           reviews.map(review =><ShowReview
           key={review._id}
review={review}
           ></ShowReview>)   
          }
        </Grid>
      </Box>
    );
};

export default Reviews;