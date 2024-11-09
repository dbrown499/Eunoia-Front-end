import React from 'react'
import '../Styling/ShoppingCartIcon.scss'

const ShoppingCartIcon = ({ quantity }) => {
    return (
        <section className='cart-quantity'>
            <p className='quantity-number'>{`${quantity}`}</p>
            <i className="gg-shopping-cart"></i>
        </section>


    )
}

export default ShoppingCartIcon