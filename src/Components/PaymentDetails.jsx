import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentDetails = () => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsProcessing(true);

      if (!stripe || !elements) {
        return;
      };
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
      };

      try {
        const response = await fetch(`${API}/payments`, {
          method: 'POST',
          body: JSON.stringify({
            order_id: 3,
            payment_method: paymentMethod.id, // Send the payment method ID to your backend
            amount: 7500, // Amount in the smallest unit (e.g., cents for USD)
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
            const { clientSecret } = data;
    
            // Use the clientSecret to confirm the payment
            const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
              payment_method: paymentMethod.id,
            });
    
            if (confirmError) {
              setError(confirmError.message);
            } else {
              setSucceeded(true);
              alert('Payment succeeded!');
              navigate(`/`);
            }
          } else {
            setError(data.error || 'Payment failed');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setIsProcessing(false);
        }
      };

    return (
        <>
         <div className="payment-form-container">
            <form onSubmit={handleSubmit} className="payment-form">

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

                {error && <div>{error}</div>}
            </form>
            </div>
        </>
    )
};

export default PaymentDetails;