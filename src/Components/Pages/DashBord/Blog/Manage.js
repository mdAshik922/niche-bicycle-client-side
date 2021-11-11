
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostProduct from './PostProduct';

const Manage = () => {
    const [manages, setManages] = useState([]);
  
    // console.log(services)
    useEffect(() =>{
       fetch('https://nameless-stream-54785.herokuapp.com/bicycle')
        .then(res => res.json())
        .then(data => setManages(data))
    },[]);

    const hendelDelete = id =>{
        // console.log(id);
        const url = `https://nameless-stream-54785.herokuapp.com/bicycle/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('successfully delete');
                const remaning = manages.filter(Manage => Manage._id !== id);
                setManages(remaning);
               }
        //  console.log(data);
        } );
    };
    return (
      
        <>  

<PostProduct></PostProduct>

{
    manages.map(manage => <div key={manage._id}>
<h2>{manage.name}</h2>
<Link to={`/update/${manage._id}`}> <Button variant="contained">update</Button></Link>
<button onClick={()=> hendelDelete(manage._id)}>Delete</button>
    </div>)
}
</>
       
    );
};

export default Manage;