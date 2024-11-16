import React, { useState } from 'react';
import '../Styling/Cart.scss';

const Cart = ({ cart, setCart }) => {

  const sizeCounts = (cart.pieces).reduce((acc, item) => {
    if (!acc[item.size]) {
      acc[item.size] = [];
    };

    acc[item.size].push(item);

    return acc;
  }, {});

  const handleIncrement = (newItem) => {
    setCart((prevCart) => ({
      totalItems: prevCart.totalItems + 1, // Increment totalItems
      pieces: [...prevCart.pieces, newItem], // Add the new object to the array
    }));
  };

  const handleDecrement = (size) => {
 
  setCart((prevCart) => {
  let removed = false;
const result = prevCart.pieces.map(item => {
  if (item.size === size && !removed) {
    removed = true; 
    return null; 
  }
  return item;
}).filter(item => item !== null);

    return {
      totalItems: prevCart.totalItems > 0 ? prevCart.totalItems - 1 : 0,
      pieces: result, 
    };
  });
};

  const handleRemoveItem = (size) => {
    setCart((prevCart) => {
      const updatedPieces = prevCart.pieces.filter((item) => item.size !== size); 
      return {
        totalItems: updatedPieces.length,
        pieces: updatedPieces,
      };
    });
  };

  return (
    <div className="cart-">
      <h2 className="cart-title">SHOPPING CART ({cart.totalItems})</h2>
      <div className="cart-header">
        <span>ITEM</span>
        <span>SIZE</span>
        <span>QTY</span>
      </div>
      <div className="cart-items">
        {Object.entries(sizeCounts).map(([size, itemsForSize]) => (

          <div key={size} className="cart-item">
            <img src={itemsForSize[0].image_url} alt={itemsForSize[0].name} className="item-image" />
            <div className="item-details">
              <p className="item-description">{itemsForSize[0].description}</p>
              <h3 className="item-name">{itemsForSize[0].name}</h3>
              <p className="item-prices">
                <span className="original-price">$159.00</span>
                <span className="sale-price">${itemsForSize[0].price}</span>
              </p>
              <p className="item-final-sale">Final Sale</p>
            </div>
            <div className="item-size">{size}</div>
            <div className="item-quantity">
              <button onClick={() => handleDecrement(itemsForSize[0].size)}>-</button>
              <span>{itemsForSize.length}</span>
              <button onClick={() => handleIncrement(itemsForSize[0])}>+</button>
            </div>
            <button className="remove-button" onClick={() => handleRemoveItem(itemsForSize[0].size)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="summary-line">
          <span>Total Discount:</span>
          <span>$12.00</span>
          {/* <span>${totalDiscount.toFixed(2)}</span> */}
        </p>
        <p className="summary-line">
          <span>Total:</span>
          <span>$150</span>
          {/* <span>${totalPrice.toFixed(2)}</span> */}
        </p>
        <button className="checkout-button">CHECKOUT</button>
      </div>
      <a href="/" className="continue-shopping">continue shopping →</a>
    </div>
  );
};

export default Cart;

