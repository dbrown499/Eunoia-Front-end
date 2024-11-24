import React from "react";
// import "./PaymentForm.scss";

const BillingDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted!");
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
            <input type="text" id="fullName" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="youremail@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="123 Main Street" required />
          </div>
        </div>

        {/* Payment Details */}
        <div className="form-section">
          <h3>Payment Details</h3>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="123" required />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;
