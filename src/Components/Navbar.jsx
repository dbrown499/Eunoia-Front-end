import React, {useState} from 'react'
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import ShoppingCartIcon from './ShoppingCartIcon'
import '../Styling/Navbar.scss'

const Navbar = ({quantity}) => {
  // const [cart, setCart] = useState([])
// console.log(number )
  return (
    <nav className='nav'>
      {/* <ShoppingCartIcon/> */}
      <HamburgerMenu className='burger-menu'/>
      <h2 className='web_name-holder'>
      <Link to={'/'} className='web_name'>œunöia*</Link>
      </h2>
      <p>
      <Link className='login'>LOGIN / REGISTER</Link>
      {/* {iteminfo && itemInfo[0]  <ShoppingCartIcon/>} */}
      <Link className='shop-now' to={'/products'}>SHOP NOW</Link>
      </p>
      {/* <p> */}
      {/* <Link to={'/clothes/cart'} className='cart'>{`CART (${quantity})`}</Link> */}
      {/* </p> */}
      {/* <button className='join_button'> */}
      {/* </button> */}
      {/* </div> */}
    </nav>
  )
}

export default Navbar