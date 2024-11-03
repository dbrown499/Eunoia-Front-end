import React from 'react'
import '../Styling/HamburgerMenu.scss'

const HamburgerMenu = () => {
    return (
        <div className='burger-menu'>
            <div className="hamburger">
                <div className="burger burger1" /> 
                <div className="burger burger2" /> 
                <div className="burger burger3" />
            </div>
                <div>MENU</div>
        </div>
    )
}

export default HamburgerMenu