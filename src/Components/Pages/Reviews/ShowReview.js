import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';

const ShowReview = ({review}) => {
const {name, message, email, half_rating } = review;

    return (
    

<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {name}
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
    {email}
    </Typography>
    <Stack>
      <Rating name="half-rating-read" defaultValue={half_rating} precision={0.5} readOnly />
    </Stack>
    <Typography variant="body2" color="text.secondary">
    {message}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
    );
};

export default ShowReview;