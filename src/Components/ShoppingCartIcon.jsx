import React from 'react'
import '../Styling/ShoppingCartIcon.scss'

const ShoppingCartIcon = ({ quantity }) => {
    return (
        <section className='cart-quantity'>
            <span className='quantity-number'>{`${quantity}`}</span>
            <i className="gg-shopping-cart"></i>
        </section>


    )
}

export default ShoppingCartIcon