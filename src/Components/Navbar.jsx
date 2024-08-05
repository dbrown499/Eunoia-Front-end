import React from 'react'
import HamburgerMenu from './HamburgerMenu';
// import ShoppingCartIcon from './ShoppingCartIcon'
import '../Styling/Navbar.scss'

const Navbar = () => {

  return (
    <nav className='nav'>
   {/* <ShoppingCartIcon/> */}
    <HamburgerMenu />
    <h2 className='web_name'>œunöia*</h2>
    <p className='login'>LOGIN</p>
    <p className='cart'>CART (0)</p>
    <button className='join_button'>SHOP NOW</button>
    </nav>
  )
}

export default Navbar