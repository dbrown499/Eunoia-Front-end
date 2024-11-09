// import React from 'react'
// import CartItems from '../Components/CartItems'
// // import '../Styling/CartItems'

// const Cart = ({ quantity, items }) => {

//   const sortClothes = (arr) => {
//     let newObj = {};

//     for (let item of arr) {
//       let name = item.type_of_clothing;
//       if (!newObj[name]) {
//         newObj[name] = [];
//       }
//       newObj[name].push(item);
//     }

//     return newObj;
//   };
//   console.log(sortClothes(items))

//   const sortedItems = sortClothes(items)


//   return (

//     <section className='checkout'>
//       <h1 className='checkout-title'>{`Shopping Cart (${quantity} item${quantity !== 1 ? 's' : ''})`}</h1>

//       <table className='checkout-table'>
//         <thead className='checkout-row-one'>
//           <tr className='checkout-row-one'>
//             <th className='checkout-head-one'>Item</th>
//             <th className='checkout-head-two'>Price</th>
//             <th className='checkout-head-three'>Quantity</th>
//           </tr>
//         </thead>
//         <tbody className='checkout-body'>
//           {Object.entries(sortedItems).map(([type, value], index) => (
//             <CartItems key={index} quantity={quantity} items={items} sort={sortClothes} type={type} value={value} />
//           ))}
//         </tbody>
//       </table>
//       <button className='checkout-button'>CHECKOUT</button>
//     </section>

//   )
// }

// export default Cart

// src/Cart.jsx
import React, { useState } from 'react';
import '../Styling/Cart.scss';

const Cart = ({ quantity, items }) => {
  console.log(items)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Tank',
            description: 'Cotton Rib',
            size: 'XS',
            color: 'Opal',
            originalPrice: 38,
            salePrice: 30,
            quantity: 1,
            image: 'path/to/tank-image.jpg',
        },
        // Add more items if needed
    ]);

    const handleQuantityChange = (id, change) => {
        setCartItems(cartItems.map(item => 
            item.id === id 
                ? { ...item, quantity: Math.max(1, item.quantity + change) }
                : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalDiscount = cartItems.reduce((acc, item) => acc + (item.originalPrice - item.salePrice) * item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.salePrice * item.quantity, 0);

    return (
        <div className="cart-">
            <h2 className="cart-title">SHOPPING CART ({quantity})</h2>
            <div className="cart-header">
                <span>ITEM</span>
                {/* <span>COLOR</span> */}
                <span>SIZE</span>
                <span>QTY</span>
            </div>
            <div className="cart-items">
                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image_url} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <p className="item-description">{item.description}</p>
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-prices">
                                <span className="original-price">${item.p}</span>
                                <span className="sale-price">${item.price}</span>
                            </p>
                            <p className="item-final-sale">Final Sale</p>
                        </div>
                        <div className="item-size">{item.size}</div>
                        {/* <div className="item-color">{item.color}</div> */}
                        <div className="item-quantity">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p className="summary-line">
                    <span>Total Discount:</span>
                    <span>${totalDiscount.toFixed(2)}</span>
                </p>
                <p className="summary-line">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </p>
                <button className="checkout-button">CHECKOUT</button>
            </div>
            <a href="/" className="continue-shopping">continue shopping →</a>
        </div>
    );
};

export default Cart;
