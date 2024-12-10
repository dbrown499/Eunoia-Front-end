import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BillingDetails from '../Components/BillingDetails';
// import PaymentDetails from '../Components/PaymentDetails';
import '../Styling/UpdateDatabase.scss';

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY);


const UpdateDatabase = ({ cart, setCart}) => {
    return (
        <>
            <Elements stripe={stripePromise}>
                <BillingDetails cart={cart} setCart={setCart}/>
            </Elements>

        </>
    )
};

export default UpdateDatabase;