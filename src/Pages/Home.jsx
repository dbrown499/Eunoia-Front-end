import React from 'react'
import '../Styling/Home.scss'

const Home = () => {
    //  onSubmit={handleSubmit}  onChange={handleTextChange}
    return (
        <>
            <p className='message'>Beautiful Thinking Inspired By  <br />The Fear of Being Average...</p>
            <section id="scroll-container">
                <p id="scroll-text">ŒUNÖIA </p>
            </section>
            <section className='waitlist'>
                <h2 className='waitlist-title'>JOIN THE WAITLIST</h2>
                <p className='waitlist_description'>Life isn't perfect but your outfit can be, updates and reminders <br /> on new drops when you sign up. </p>
                <form className='sign-up_container'>
                    <label  className='sign-up_label' htmlFor="sign-up">Email <small className='require'>(required)</small></label>
                    <br />
                    <input
                        id="sign-up"
                        // value=""
                        type="text"
                        // placeholder=""
                        required
                    />
                    <br />
                    <button className='sign-up_button' type="submit">SIGN UP</button>
                </form>
            </section>
        </>
    )
}

export default Home