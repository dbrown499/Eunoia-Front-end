import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Home.scss';

const API = import.meta.env.VITE_API_URL;

const Home = () => {
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
        <>
            <p className='message'>Beautiful Thinking Inspired By  <br />The Fear of Being Average...</p>
            <section id="scroll-container">
                <p id="scroll-text">ŒUNÖIA </p>
            </section>
        </>
    )
}

export default Home;