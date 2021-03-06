import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderForm from '../Form/OrderForm/OrderForm';

const Order = () => {
    const [users, setUsers] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const uri = `https://nameless-stream-54785.herokuapp.com/bicycle/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[id]);
    
    return (
        <div>
           <div>
           <h2>Perches now</h2>
            <p> Product Id:{id}</p>
            <h3> {users.name}</h3>

            <img src={users.img} alt="bicycle"/>

            <h6>{users.description}</h6>
           </div>


            <div>
                <OrderForm 
                details={users}
                ></OrderForm>
            </div>
        </div>
    );
};

export default Order;