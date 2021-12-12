import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';


const CheckOutForm = ({bicycles}) => {

const { price, name, _id } = bicycles;
const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [ error, setError ] = useState('');
    const [ clientSecret, setClientSecret ] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        fetch('https://nameless-stream-54785.herokuapp.com/create-payment-intent',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data =>setClientSecret(data.clientSecret))
    },[price]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          };

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          };
setProcessing(true);
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError( error.message);
          } else {
            setError('');
            console.log( paymentMethod);
          };

          //payment intent
          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
              {
                  payment_method: {
                      card: card,
                      billing_details:{
                          name: name,
                          email: user.email
                        
                      }, 
                  },
              },
          );
        
          if(intentError){
            setError(intentError.message);
            setSuccess('')
        }
        else{
            setError('')
            setSuccess('success your payment processing');
            console.log(paymentIntent);
            setProcessing(false);

            //save to database
           const payment = {
amount: paymentIntent.amount,
created: paymentIntent.created,
last4: paymentMethod.card.last4,
transaction:paymentIntent.clientSecret.slice('_secret')[0]
           }
           const url = `https://nameless-stream-54785.herokuapp.com/payment_update/${_id}`;
           fetch(url, {
             method: 'PUT',
             headers: {
               'content-type': 'application/json'
             },
             body: JSON.stringify(payment)
           })
           .then(res=>res.json())
           .then(data =>console.log(data))
        }
    };

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
   { processing?<CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
      Appointment
    </button>}
      {error && <p style={{color: "red"}}>{error}</p>}
      {success && <p style={{color: "green"}}>{success}</p>}
    </form>
        </div>
    );
};

export default CheckOutForm;