import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./PaymentForm.scss";


const API = import.meta.env.VITE_API_URL;


const BillingDetails = () => {



    return (
        <div className="payment-form-container">
            <h2 className="payment-form-title">Complete Your Payment</h2>
            <form className="payment-form">
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
                    <div className='form-group'>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="phone number" id="phone-number" placeholder='(123) 456-7890' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="123 Main Street" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" placeholder="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" placeholder="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="text" id="zipcode" placeholder="12345" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select id="country" required>
                            <option value="">
                                Select your country
                            </option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                </div>
                {/* Next Button
                <Link to={"/payment"}>
                <button type="submit" className="submit-btn" >
                    Next
                </button>
                </Link> */}

            </form>
        </div>
    );
};

export default BillingDetails;
