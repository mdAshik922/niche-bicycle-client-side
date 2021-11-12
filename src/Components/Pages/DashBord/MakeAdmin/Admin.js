import { Alert, Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setsuccess] = useState(false);

const {token}=useAuth();

    const handelEmail = e =>{
        setEmail(e.target.value)
    };
    const handelSubmit = e =>{
        const user = {email};
        fetch('https://nameless-stream-54785.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                // console.log(data);
                setEmail('');
                setsuccess(true);
               
            }
         
        });
        e.preventDefault();
    };
    return (
        <div>
            <h2>admin</h2>
            <form onSubmit={handelSubmit}>
<TextField 
label="email"
 type="email"
  onBlur={handelEmail}
   variant="standard"
   />

<Button type="submit" variant="contained">Submit</Button>
            </form>
     {/* success message show */}
            {success && <Alert security="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default Admin;