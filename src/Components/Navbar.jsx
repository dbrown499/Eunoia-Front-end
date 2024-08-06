import React, {useState} from 'react'
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
// import ShoppingCartIcon from './ShoppingCartIcon'
import '../Styling/Navbar.scss'

const Navbar = ({quantity}) => {
  // const [cart, setCart] = useState([])
// console.log(number )
  return (
    <nav className='nav'>
      {/* <ShoppingCartIcon/> */}
      <HamburgerMenu />
      <h2 className='web_name-holder'>
      <Link to={'/'} className='web_name'>œunöia*</Link>
      </h2>
      {/* <div> */}
      <p>
      <Link className='login'>LOGIN</Link>
      </p>
      <p>
      <Link to={'/clothes/cart'} className='cart'>{`CART (${quantity})`}</Link>
      </p>
      <button className='join_button'>
        <Link className='shop-now-holder' to={'/clothes'}>SHOP NOW</Link>
      </button>
      {/* </div> */}
    </nav>
  )
}

export default Navbar