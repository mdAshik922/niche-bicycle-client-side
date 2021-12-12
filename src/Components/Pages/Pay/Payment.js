import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../Form/CheckOutForm/CheckOutForm';

const stripePromise = loadStripe('pk_test_51Jvt4LCMGyJ3AN2NffykJgmbxHheLR5TwIVvc598ZZQ8mcR5Ga8tCIiNW2MhgVdtoCYdYDnUSYp9QXM6U4L0fvHL00i8OCnYEs')

const Payment = () => {
    const { bicycId } = useParams();
    const [ bicycles, setBicycles ] = useState({});
    useEffect(()=>{
fetch(`https://nameless-stream-54785.herokuapp.com/bicyclePayment/${bicycId}`)
.then(res => res.json())
.then(data => setBicycles(data))
    },[bicycId]);
    
    return (
        <div>
            
            <h3>phone{bicycles.phone}</h3>

            { bicycles?.price&&<Elements stripe={stripePromise}>
      <CheckOutForm
      bicycles={bicycles}
      />
    </Elements>}
        </div>
    );
};

export default Payment;