import React, { useState } from 'react'
import '../Styling/CartItem.scss'
// import Sweaters from '../assets/IMG_2519.jpeg'
// import Pants from '../assets/0521152011_664c3d1bdbbc2.jpg'
// import Shirts from '../assets/istockphoto-471074802-612x612.jpg'

const CartItems = ({type, value}) => {
const [deleteQuantity, setDeleteQuantity] = useState([...value])


const handleDelete = () => {
  if (deleteQuantity.length > 0) {
    // Create a new array without the last item
    const updatedQuantity = deleteQuantity.slice(0, -1);
    // Update the state with the new array
    setDeleteQuantity(updatedQuantity);
  }
   
  }
 

  const handleChange = (e) => {
    e.preventDefault();

  }

  return (
    <>
    <thead className='checkout-row-one'>
          <tr className='checkout-row-one'>
            <th className='checkout-head-one'>Item</th>
            <th className='checkout-head-two'>Price</th>
            <th className='checkout-head-three'>Quantity</th>
          </tr>
        </thead>
          <tr className='each-row'>
            <td className='checkout-details'>
            {type == "Sweaters" ? (<img id='clothe-img' src="../assets/IMG_2519.jpeg" alt="img" />) : type == "Pants" ? (<img id='clothe-img' src="../assets/0521152011_664c3d1bdbbc2.jpg" alt="img" />): type == "Shirts" ? (<img id='clothe-img' src="../assets/istockphoto-471074802-612x612.jpg" alt="img" />): null }
              <p className='checkout-description'>{type}</p>
            </td>
            <td className='item-price'>{value[0].price}</td>
            <td>
              <input
                id='quantity-input'
                type="number"
                value={value.length}
                onChange={handleChange} />
            </td>
            <button onClick={handleDelete} className='delete'>X</button>
          </tr>
    </>
  )
}

export default CartItems