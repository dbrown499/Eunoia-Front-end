import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import ShoppingCartIcon from './ShoppingCartIcon'
import SelectedItem from './SelectedItem';
import '../Styling/Navbar.scss'

const Navbar = ({ quantity }) => {
  const location = useLocation(); 
  const [isSelectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    setSelectedItem(location.pathname === '/products/Sweater');
  }, [location]);

  return (
    <nav className='nav'>
      <HamburgerMenu className='burger-menu' />
      <h2 className='web_name-holder'>
        <Link to={'/'} className='web_name'>œunöia*</Link>
      </h2>
      <div>
        {isSelectedItem ? (
          <div className='render'>
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
      </div>
    </nav>
  )
}

export default Navbar
