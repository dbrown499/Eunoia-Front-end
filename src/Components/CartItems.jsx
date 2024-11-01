import React, { useState } from 'react'
import '../Styling/CartItem.scss'
// import Sweaters from '../assets/IMG_2519.jpeg'
// import Pants from '../assets/0521152011_664c3d1bdbbc2.jpg'
// import Shirts from '../assets/istockphoto-471074802-612x612.jpg'

const CartItems = ({quantity, items, type, value}) => {
const [deleteQuantity, setDeleteQuantity] = useState(quantity)


const handleDelete = () => {
    const updatedQuantity = deleteQuantity - 1;
    setDeleteQuantity(updatedQuantity);
  
};

const handleChange = (e) => {
  const newQuantity = parseInt(e.target.value);
  if (newQuantity >= 0) {
    setDeleteQuantity(newQuantity);
  }
};

  return (
    <>
   
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