import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import ShoppingCartIcon from './ShoppingCartIcon'
import SelectedItem from './SelectedItem';
import '../Styling/Navbar.scss'

const Navbar = ({ quantity }) => {
  const location = useLocation();  // Gets the current route
  const [isSelectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    // Check if the current path is '/products'
    setSelectedItem(location.pathname === '/products/Sweater');
  }, [location]);

  // console.log(quantity)
  // const [cart, setCart] = useState([])
  // console.log(number )
  return (
    <nav className='nav'>
      <HamburgerMenu className='burger-menu' />
      <h2 className='web_name-holder'>
        <Link to={'/'} className='web_name'>œunöia*</Link>
      </h2>
      <p>
        {isSelectedItem ? (
          <div className='render'>
            {/* <Link to={'/clothes/cart'} className='cart'>{`CART (${quantity})`}</Link> */}
            <Link to={'/products/cart'} className='cart'>{<ShoppingCartIcon quantity={quantity}/>}
            </Link>
            <Link className='shop-now' to={'/products'}>SHOP NOW</Link>
          </div>

        ) : (
          <>
            <Link className='login'>LOGIN / REGISTER</Link>
            <Link className='shop-now' to={'/products'}>SHOP NOW</Link>
          </>
        )}
      </p>
    </nav>
  )
}

export default Navbar
{/* <ShoppingCartIcon/>  */ }
{/* <Link className='login'>LOGIN / REGISTER</Link>
      <Link className='shop-now' to={'/products'}>SHOP NOW</Link> */}
{/* <p> */ }
{/* <Link to={'/clothes/cart'} className='cart'>{`CART (${quantity})`}</Link> */ }
{/* </p> */ }
{/* <button className='join_button'> */ }
{/* </button> */ }
{/* </div> */ }