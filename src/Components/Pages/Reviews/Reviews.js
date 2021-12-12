import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import "./Review.css";

import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://nameless-stream-54785.herokuapp.com/review')
        .then(res=>res.json())
        .then(data =>setReviews(data))
    },[]);

    return (

        <Box sx={{ margin: 5,  flexGrow: 1 }}>
           <Swiper slidesPerView={3} spaceBetween={30}
     pagination={{
  "clickable": true
}} className="mySwiper">
          <Typography sx={{color: 'goldenrod'}} variant="h4">
          Customer Reviews
          </Typography>
        <Grid sx={{marginTop: '15px'}} container spacing={2} columns={16}>
          {
           (reviews || []).map(review =>{
            return ( <SwiperSlide key={review._id}><ShowReview review={review} /></SwiperSlide>
              )
            })   
          }
        </Grid>
        </Swiper>
      </Box>
    );
};

export default Reviews;