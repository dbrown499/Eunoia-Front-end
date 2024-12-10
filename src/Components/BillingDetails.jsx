import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const API = import.meta.env.VITE_API_URL;


const BillingDetails = ({ cart, setCart }) => {
    const param = useParams();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [billingEntry, setBillingEntry] = useState({
        order_id: param.id,
        full_name: "",
        address_line1: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        phone_number: "",
        email: ""
    });

    const handleChange = (e) => {
        setBillingEntry((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        if (!stripe || !elements) {
            setError('Stripe has not loaded correctly. Please refresh and try again.');
            setIsProcessing(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Create payment method
        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (paymentMethodError) {
            setError(paymentMethodError.message);
            setIsProcessing(false);
            return;
        }

        try {
            // Submit billing details
            const response = await fetch(`${API}/billing-details`, {
                method: 'POST',
                body: JSON.stringify(billingEntry),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to submit billing details');
            }

            // Proceed with payment
            const paymentResponse = await fetch(`${API}/payments/${param.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    payment_method: paymentMethod.id,
                    // amount: amount, // Send the amount from the backend response
                    payment_status: "completed", // Assuming status update is done manually or via Stripe API
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const paymentData = await paymentResponse.json();

            if (paymentResponse.ok) {
                const { clientSecret } = paymentData;

                // Use the clientSecret to confirm the payment
                const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id,
                });

                if (confirmError) {
                    setError(confirmError.message);
                } else {
                    if (paymentIntent.status === 'succeeded') {
                        setSucceeded(true);
                        alert('Payment succeeded!');

            // Decrease the product stock 
                const productRequests = cart.pieces.map(async (obj) => {
                    const stockResponse = await fetch(`${API}/products/${obj.size}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
    
                    // console.log(stockResponse)

                    if (!stockResponse.ok) {
                        throw new Error('Failed to fetch current stock');
                    }
        
                    const stockData = await stockResponse.json();    
                    const currentStock = stockData[0].stock; // Assuming the response has a `stock` property
                    // const sizeWithProductId = {
                    //     XS: 1, 
                    //     S: 2,
                    //     M: 3,
                    //     L: 4, 
                    //     XL: 5, 
                    //     XXL: 6
                    // }
                    console.log(currentStock - 1)
                    const response = await fetch(`${API}/products/${obj.size}`, {
                        method: 'PUT',
                        body: JSON.stringify(),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                            if (!response.ok) {
                                throw new Error('Failed to update product stock');
                            }

                            const data = await response.json();
                            return data; // Collect response data for each item
                        });

                        // Wait for all the order item requests to complete
                        const results = await Promise.all(productRequests);
                        console.log('All products updated:', results);
                        navigate(`/`);
                        window.location.reload(); // Reload the current page
                    } else {
                        setError('Payment failed or requires further action.');
                    }
                }
            } else {
                setError(paymentData.error || 'Payment failed');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };



    return (
        <div className="payment-form-container">
            <h2 className="payment-form-title">Complete Your Payment</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                {/* Billing Details */}
                <div className="form-section">
                    <h3>Billing Details</h3>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name='full_name'
                            value={billingEntry.full_name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={billingEntry.email}
                            onChange={handleChange}
                            placeholder="youremail@example.com"
                            required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                            type="phone number"
                            id="phone-number"
                            name='phone_number'
                            value={billingEntry.phone_number}
                            onChange={handleChange}
                            placeholder='(123) 456-7890'
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name='address_line1'
                            value={billingEntry.address_line1}
                            onChange={handleChange}
                            placeholder="123 Main Street"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name='city'
                            value={billingEntry.city}
                            onChange={handleChange}
                            placeholder=""
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name='state'
                            value={billingEntry.state}
                            onChange={handleChange}
                            placeholder=""
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input
                            type="text"
                            id="zipcode"
                            name='postal_code'
                            value={billingEntry.postal_code}
                            onChange={handleChange}
                            placeholder="12345"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name='country'
                            value={billingEntry.country}
                            onChange={handleChange}
                            required>
                            <option value="">Select your country</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="form-section">
                    <h3>Payment Details</h3>
                    <div className="form-group">
                        {/* <label htmlFor="cardNumber">Card Number</label> */}
                        <CardElement id="cardNumber" />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={!stripe || isProcessing}>
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>

                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    );
};

export default BillingDetails;
