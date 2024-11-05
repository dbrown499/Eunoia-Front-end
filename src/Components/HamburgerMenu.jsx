import { useState } from 'react'
import React from 'react'
import '../Styling/HamburgerMenu.scss'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className='burger-menu' onClick={toggleMenu}>
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <div className="burger burger1" /> 
                <div className="burger burger2" /> 
                <div className="burger burger3" />
            </div>
                <div>MENU</div>
        </div>
    )
}

export default HamburgerMenu