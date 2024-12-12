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
        <img src="https://i.pinimg.com/736x/54/39/1f/54391fd78fbf540823af22ef78ddc899.jpg" className="instagram-image " alt="" />
        </a>
        <a href="https://www.tiktok.com/@eunoia.outlet?_t=8r6Yo1Sfsxq&_r=1" target="_blank">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2PIRN-3eEoU59ztGpbErG5IpUUHISB0lnQ&s" className="tiktok-image" alt="" />
      </a>
        </section>
      <p className='copyright'>© 2024 ŒUNÖIA. All rights reserved.</p>
    </section>
  )
}

export default ContactInfo