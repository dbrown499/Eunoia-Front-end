import React from 'react'
// import { Link } from 'react-router-dom'
import CartItems from '../Components/CartItems'

const Cart = ({quantity, items}) => {
  return (
    <>
    <CartItems quantity={quantity} items={items}/>
    </>
  )
}

export default Cart