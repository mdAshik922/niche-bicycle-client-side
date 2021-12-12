import  TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import { Stack } from '@mui/material';

const ReviewForm = () => {
    // const [rating, setRating] = useState(5);
    const [ reviews, setReviews ] = useState({});
    const handelInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
   const newLoginData = {...reviews};
newLoginData[field]=value;
setReviews(newLoginData);
    };

    const handelSubmit = e =>{

        fetch('https://nameless-stream-54785.herokuapp.com/review', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
            alert('success your comment');
                        }
                    });
                    e.preventDefault();
    };

    return (
    
<Box sx={{ minWidth: 275, marginBottom: '15px' }}>
<Card style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: 'center', marginTop: '20%'}} variant="outlined">

<form onSubmit={handelSubmit}>
    
<TextField sx={{marginRight: '15px'}} 
onBlur={handelInput} name="name"
 required label="Name" variant="standard"  focused />

<TextField onBlur={handelInput}
 name="email"  type="email"
  label="Email"
  variant="standard" required focused />
<br/>
<br/>

<Stack  onBlur={handelInput}   spacing={1}>
      <Rating style={{marginLeft: "auto", marginRight: "auto", }}
      name="half_rating"  defaultValue={2.5} precision={0.5} />
    
    </Stack>
<br/>
<br/>

<TextField onBlur={handelInput}
          id="filled-multiline-static"
          label="comment"
          multiline
          name="message"
          rows={4}
          required
          placeholder="please Enter you comment"
          variant="filled"/>
 
<br/>
<br/>

<Button sx={{ width: '75%', m: 1, backgroundColor: 'green' }} type="submit" variant="contained">Send Message</Button>

</form>

</Card>
</Box>
    );
};

export default ReviewForm;