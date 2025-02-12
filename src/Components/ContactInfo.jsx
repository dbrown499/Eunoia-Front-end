import React from 'react'
import '../Styling/ContactInfo.scss'
// import profilePic from '../../assets/1EB45B7F-F79A-4C3A-9F70-2D2B6719A4AA.JPEG'
const ContactInfo = () => {
  return (

    <section className='contact_developer'>
      {/* <img src={profilePic} alt="description"/> */}
      <p className='contact'>CONTACT US</p>
      <section className='contact-images'>
        <a href="https://www.instagram.com/eunoia.outlet/?igsh=dWgzc20yanJxMWV2" target="_blank">
        <img src="assets/instagramicon.png" className="instagram-image " alt="" />
        </a>
        <a href="https://www.tiktok.com/@eunoia.outlet?_t=8r6Yo1Sfsxq&_r=1" target="_blank">
        <img src="assets/tiktokicon.png" className="tiktok-image" alt="" />
      </a>
        </section>
      <p className='copyright'>© 2024 ŒUNÖIA. All rights reserved.</p>
    </section>
  )
}

export default ContactInfo