import React from "react";

import axios from 'axios';
import Stripe from "react-stripe-checkout";

const Payment = () => {
    const handleToken = (totalAmount, token) => {
        try {
            axios.post("http://localhost:5005/api/stripe/pay", {
                token: token.id,
                amount: totalAmount
            });
        } catch (err) {
            console.log(err);
        }
    }

    const tokenHandler = (token) => {
        handleToken(100, token);
    }

    return (
        <div>
            <Stripe stripeKey="" token={tokenHandler}/>
        </div>
    )
}

export default Payment;