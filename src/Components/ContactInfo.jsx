import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/ContactInfo.scss'
import cards from '../../assets/card-icons.png';
import tiktok from '../../assets/tiktokicon.png';
import instagram from '../../assets/instagramicon.png';
import brandLogo from '../../assets/brandlogo.png';
import Loading from './Loading';



const API = import.meta.env.VITE_API_URL;

const ContactInfo = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState({
    name_of_email: ''
  });

  const handleChange = (e) => {
    setNewEmail({ ...newEmail, name_of_email: e.target.value });
  };


  const addEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!newEmail.name_of_email) {
      alert('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail.name_of_email)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true); // Start loading


    try {
      await new Promise(resolve => setTimeout(resolve, 8000));

      const response = await fetch(`${API}/emails`, {
        method: 'POST',
        body: JSON.stringify(newEmail),
        headers: {
          'Content-Type': 'application/json'
        }
      });


      if (!response.ok) {
        throw new Error('Failed to add email');
      }

      const data = await response.json();
      setResponseData(data);
      setLoading(false); // ✅ Stop loading right before showing alert
      setTimeout(() => {
        alert('Thanks For Signing Up!');
      }, 100); // Delay alert to ensure loading state is updated     
      setNewEmail({ name_of_email: '' });
      navigate(`/`);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (

    <section className='contact_developer'>
      <div className='follow-us join-list '>

        <div className='quote'>
          <img className="image" src={brandLogo} alt="Brand Logo" />
        </div>

        <div className='join'>
          <p className='waitlist-description'>Updates & Reminders On New Drops When You Sign Up! </p>
          {loading ? <Loading /> :

            <form className='sign-up-container'
              onSubmit={addEmail}
            >

              <input
                placeholder='ENTER YOUR E-MAIL'
                type="text"
                id="sign-up"
                value={newEmail.email}
                onChange={handleChange}
                required
              />
              <br />
              <button className='sub-button' type="submit" >SUBSCRIBE</button>
            </form>}
        </div>

        <div className='follow'>
          <h1>FOLLOW US</h1>
          <a href="https://www.instagram.com/eunoiaexhibit?igsh=dWgzc20yanJxMWV2" target="_blank">
            <img src={instagram} className="instagram-image " alt="" />
          </a>
          <a href="https://www.tiktok.com/@eunoiaexhibit?_t=ZT-8tqa9Sdb9vm&_r=1" target="_blank">
            <img src={tiktok} className="tiktok-image" alt="" />
          </a>
        </div>

        <div className='call'>
          <h1>CALL US</h1>
          <a href="tel:+16464444107">+1 (646) 444-4107</a>
        </div>
      </div>


      <div className='copyright-tag pay-images'>
        <p className='copyright'>© 2024 ŒUNÖIA. All rights reserved.</p>
        <div className='cards'>
          <img className="each-card" src={cards} alt="cards" />
        </div>
      </div>
    </section>

  )
}

export default ContactInfo;