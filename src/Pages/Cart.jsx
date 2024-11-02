import React from 'react'
import CartItems from '../Components/CartItems'
// import '../Styling/CartItems'

const Cart = ({ quantity, items }) => {

  const sortClothes = (arr) => {
    let newObj = {};

    for (let item of arr) {
      let name = item.type_of_clothing;
      if (!newObj[name]) {
        newObj[name] = [];
      }
      newObj[name].push(item);
    }

    return newObj;
  };
  console.log(sortClothes(items))

  const sortedItems = sortClothes(items)


  return (

    <section className='checkout'>
      <h1 className='checkout-title'>{`Your Cart (${quantity} item${quantity !== 1 ? 's' : ''})`}</h1>

      <table className='checkout-table'>
        <thead className='checkout-row-one'>
          <tr className='checkout-row-one'>
            <th className='checkout-head-one'>Item</th>
            <th className='checkout-head-two'>Price</th>
            <th className='checkout-head-three'>Quantity</th>
          </tr>
        </thead>
        <tbody className='checkout-body'>
          {Object.entries(sortedItems).map(([type, value], index) => (
            <CartItems key={index} quantity={quantity} items={items} sort={sortClothes} type={type} value={value} />
          ))}
        </tbody>
      </table>
      <button className='checkout-button'>CHECKOUT</button>
    </section>

  )
}

export default Cart