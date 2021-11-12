import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

import React from 'react';

const ShowReview = ({review}) => {
const {name, message, email }=review;
    return (
    

<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {name}
    </Typography>
    <Typography gutterBottom variant="h5" component="div">
    {email}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    {message}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
    );
};

export default ShowReview;