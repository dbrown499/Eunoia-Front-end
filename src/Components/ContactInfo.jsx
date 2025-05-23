import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/ContactInfo.scss'
import cards from '../../assets/card-icons.png';
import tiktok from '../../assets/tiktokicon.png';
import instagram from '../../assets/instagramicon.png';
import brandLogo from '../../assets/IMG_9543.PNG';


const API = import.meta.env.VITE_API_URL;

const ContactInfo = () => {
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState({
    name_of_email: null
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

    try {
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

      await response.json();
      alert('Thanks For Signing Up!');
      setNewEmail({ email: '' });
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
          <img className="image " src={brandLogo} alt="" />
        </div>

        <div className='join'>
          <p className='waitlist-description'>Updates & Reminders On New Drops When You Sign Up! </p>
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
          </form>
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

export default ContactInfo