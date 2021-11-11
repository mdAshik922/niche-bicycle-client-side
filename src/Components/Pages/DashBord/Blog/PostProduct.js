import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';
import { Box } from '@mui/system';
const PostProduct = () => {
    const [bicycles, setBicycles]=useState({});
    const handelInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
   const newLoginData = {...bicycles};
newLoginData[field]=value;
setBicycles(newLoginData);
    }

    const handelSubmit = e =>{

// post api
        fetch('https://nameless-stream-54785.herokuapp.com/bicycle', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
body: JSON.stringify(bicycles)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.insertedId){
            alert('success your Post')
               
             
                        }
                    })
                    e.preventDefault();
    };
    return (
           
<Box sx={{ minWidth: 275, marginBottom: '15px' }}>
<Card style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: 'center', marginTop: '20%'}} variant="outlined">

<form onSubmit={handelSubmit}>
    

<TextField sx={{marginRight: '15px'}} onBlur={handelInput} name="name" required label="product Name" variant="standard"  focused />
<br/>
<br/>
<TextField sx={{marginRight: '15px'}} onBlur={handelInput} name="price" required label="product Price" variant="standard"  focused />


<TextField onBlur={handelInput} name="img"  type="text" label="Product img link or url" variant="standard" required focused />
<br/>
<br/>

<TextField onBlur={handelInput}
          id="filled-multiline-static"
          label="description"
          multiline
          name="description"
          rows={4}
          required
          placeholder="please Enter you product description"
          variant="filled"/>
 
<br/>
<br/>
<Button sx={{ width: '75%', m: 1, backgroundColor: 'green' }} type="submit" variant="contained">Post your product</Button>

</form>

         </Card>
         </Box>
    );
};

export default PostProduct;