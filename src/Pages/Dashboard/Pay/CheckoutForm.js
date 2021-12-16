import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ price, name, mail, phone, id }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, SetClientSecret] = useState('');

    useEffect(() => {
        fetch('https://enigmatic-oasis-12833.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => SetClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
            setSuccess('');
        }

        // Payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: mail
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('');
        }
        else {
            setError('')
            setSuccess('Your Payment Processed Successfully');
            console.log(paymentIntent)
            setProcessing(false);
            // save to database
            const payment = {
                amout: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }

            const url = `https://enigmatic-oasis-12833.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }

    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ border: '1px solid black', padding: '0 5px' }}>
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
                </div>

                {processing ? <CircularProgress sx={{ mt: 2 }}></CircularProgress> : <button style={{ padding: '5px 30px', fontSize: '15px', marginTop: '10px', backgroundColor: '#1976d2', border: '2px solid black', borderRadius: '50px', color: 'white' }} type="submit" disabled={!stripe || success}>
                    {!success ? `Pay $${price}` : `Paid`}
                </button>}
            </form>
            {
                error ? <h4 style={{ color: 'red' }}>{error}</h4> : <h4 style={{ color: 'green' }}>{success}</h4>
            }
        </div>
    );
};

export default CheckoutForm;