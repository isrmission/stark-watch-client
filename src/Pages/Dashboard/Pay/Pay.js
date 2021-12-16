import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForms from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51K6emQDe7oqbH0TxipWOGNrrWV8Rs1pj1Z2bX6MIaOUZGN2CtBy1iDGxYuXhhpobAH4wOTg12xuAnaATxxFEVBid00fbkYECUC')

const Pay = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId])
    const amount = order.price * order.quantity
    return (
        <div>
            <h2>
                Payment from "{order.name}" for <span style={{ color: 'blue' }}>"{order.product}"</span>
            </h2>
            <h3 style={{ color: 'green' }}>
                Payment Amount: ${amount}
            </h3>
            {order.price && <Elements stripe={stripePromise}>
                <CheckoutForms
                    price={amount}
                    name={order.name}
                    mail={order.email}
                    phone={order.phone}
                    id={order._id}
                ></CheckoutForms>
            </Elements>}
        </div>
    );
};

export default Pay;