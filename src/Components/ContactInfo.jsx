import React from 'react'
import '../Styling/ContactInfo.scss'
// import profilePic from '../../assets/1EB45B7F-F79A-4C3A-9F70-2D2B6719A4AA.JPEG'
const ContactInfo = () => {
  return (

    <section className='contact_developer'>
      <div className='follow-us join-list'>

        <div className='quote'>
          <img src="IMG_9543.PNG" alt="" />
          {/* <p>Life isn't perfect but your outfit can be...</p> */}
        </div>

        <div className='join'>
          {/* <h2 className='waitlist-title'>JOIN THE WAITLIST</h2> */}
          <p className='waitlist-description'>Updates & Reminders On New Drops When You Sign Up! </p>
          <form className='sign-up-container'
          // onSubmit={addEmail}
          >
            {/* <label  className='sign-up_label' htmlFor="sign-up">Email <small className='require'>(required)</small></label> */}
          
            <input
            placeholder='ENTER YOUR E-MAIL'
              type="text"
              id="sign-up"
              // value={newEmail.email}
              // onChange={handleChange}
              required
            />
            <br />
            <button className='sub-button' type="submit" >SUBSCRIBE</button>
          </form>
        </div>

          <div className='follow'>
            <h1>FOLLOW US</h1>
            <a href="https://www.instagram.com/eunoiaexhibit?igsh=dWgzc20yanJxMWV2" target="_blank">
              <img src="assets/instagramicon.png" className="instagram-image " alt="" />
            </a>
            <a href="https://www.tiktok.com/@eunoiaexhibit?_t=ZT-8tqa9Sdb9vm&_r=1" target="_blank">
              <img src="assets/tiktokicon.png" className="tiktok-image" alt="" />
            </a>
          </div>

          <div className='call'>
            <h1>CALL US</h1>
            <p>+1 (646) 444-4107</p>
          </div>

      </div>

      <div className='copyright-tag pay-images'>
        <p className='copyright'>© 2024 ŒUNÖIA. All rights reserved.</p>
        <div className='cards'>
          <img className="each-card" src="Screenshot 2025-02-11 at 9.47.27 PM.png" alt="cards" />
        </div>
      </div>
    </section>

    // <section className='contact_developer'>
    //   {/* <img src={profilePic} alt="description"/> */}
    //   <p className='contact'>CONTACT US</p>
    //   <section className='contact-images'>
    //     <a href="https://www.instagram.com/eunoia.outlet/?igsh=dWgzc20yanJxMWV2" target="_blank">
    //     <img src="assets/instagramicon.png" className="instagram-image " alt="" />
    //     </a>
    //     <a href="https://www.tiktok.com/@eunoia.outlet?_t=8r6Yo1Sfsxq&_r=1" target="_blank">
    //     <img src="assets/tiktokicon.png" className="tiktok-image" alt="" />
    //   </a>
    //     </section>
    // <p className='copyright'>© 2024 ŒUNÖIA. All rights reserved.</p>
    // </section>
  )
}

export default ContactInfo