import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderForm from '../Form/OrderForm/OrderForm';

const Order = () => {
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const uri = ` https://nameless-stream-54785.herokuapp.com/bicycle/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[]);
    
    return (
        <div>
           <div>
           <h2>Perches now</h2>
            <p> Product Id:{id}</p>
            <h3> {user.name}</h3>

            <img src={user.img} alt="bicycle"/>

            <h6>{user.description}</h6>
           </div>

            <div>
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default Order;