import { Button, Card, TextField} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';


const OrderForm = ( props ) => {
   
    console.log(props);
   const {price}= props.bicycle || {};
    const { user } = useAuth();
    const [isOrder, setIsOrder]=useState({});

    const handelInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
   const newLoginData = {...isOrder};
newLoginData[field]=value;
setIsOrder(newLoginData);
    };

    const handelSubmit = e =>{

        fetch('https://nameless-stream-54785.herokuapp.com/order', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
body: JSON.stringify(isOrder)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
            alert('success order but Payment system coming soon. thank you!')
               
             
                        }
                    });
                    e.preventDefault();
    };

    return (
    
<Box sx={{ minWidth: 275, marginBottom: '15px' }}>
<Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: 'center', marginTop: '20%'}} variant="outlined">

<form onSubmit={ handelSubmit }>
    
<TextField sx={{ marginRight: '15px' }} onBlur={ handelInput } name="name" 
 label=" Name" variant="standard"   defaultValue={ user.displayName } required />


<TextField onBlur={ handelInput } name="email"  type="email"
 label=" Email" variant="standard" defaultValue={ user.email } required />
<br/>
<br/>
<TextField onBlur={ handelInput } name="Price"  type="number"
 label="price"  variant="standard" defaultValue={ price } disabled  />
<br/>
<br/>

<TextField onBlur={ handelInput } name="phone"  type="number" label=" Phone" variant="standard" required  focused />

<br/>
<br/>
<TextField onBlur={handelInput}
          id="filled-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
          placeholder="your message"
          required
          variant="filled"/>
 
<br/>
<br/>

<Button sx={{ width: '75%', m: 1, backgroundColor: 'green' }} type="submit" variant="contained">Purches</Button>

</form>

</Card>
</Box>
    );
};

export default OrderForm;