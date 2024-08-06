import React, { useState, useEffect} from 'react'
import '../Styling/CartItem.scss'
// import { useParams } from 'react-router-dom'

const CartItems = ({quantity, items}) => {
  console.log(items)
//     const [cartNum, setCartNum] = useState(0)
// let { num } = useParams()

// useEffect(() => {
//     const parsedNum = parseInt(num, 10);
//     setCartNum(parsedNum);
// }, [num]);

  return (
   <section className='checkout'>
<h1 className='checkout-title'>{`Your Cart (${quantity} item${quantity !== 1 ? 's' : ''})`}</h1>   
<table className='checkout-table'>
      <thead className='checkout-head'>
      <tr className='checkout-row-one'>
        <th className='checkout-head-one'>Item</th>
        <th className='checkout-head-two'>Price</th>
        <th className='checkout-head-three'>Quantity</th>
        <th className='checkout-head-four'>X</th>
      </tr>
      </thead>
      <tbody className='checkout-body'>
      <tr>
        <td>
          {/* {items.map((item)=>{
            if(item.type_clothing)
          })} */}
          {/* <img id='sweater-img' src="/assets/IMG_2519.jpeg" alt="" /> */}
          <p>item is the newest collection</p>
        </td>
        <td>59.99</td>
        <td>
          <input
        type="number" 
        value={quantity}/>
        </td>
        <td>X</td>
      </tr>

      </tbody>
    </table>
    <button>CHECKOUT</button>
    </section>
  )
}

export default CartItems