import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const UpdateProduct = () => {
const [updateProduct, setUpdateProduct] = useState({});
const {id} = useParams();
useEffect(()=>{
    const url = ` https://nameless-stream-54785.herokuapp.com/bicycle/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setUpdateProduct(data))
},[]);

const handelUpdate = e =>{
const url = ` https://nameless-stream-54785.herokuapp.com/bicycle/${id}`;
fetch(url,{
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateProduct)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount > 0){
alert('update successfully');
setUpdateProduct({});
    }
});

e.preventDefault();
};

const handelname =e =>{
   const updateName = e.target.value;
const updateProduct = {name: updateName};
setUpdateProduct(updateProduct)
}
    return (
        <div>
            <h2>Update: {updateProduct.name}</h2>
            <p>{id}</p>
            <form onSubmit={handelUpdate}>
<TextField 
label= "Update Product Name"
name= ""
onChange={handelname}
value={updateProduct.name || ''}
type= "text"
variant="standard"
/>
<Button type="submit" variant="contained">Submit</Button>
            </form>

        </div>
    );
};

export default UpdateProduct;