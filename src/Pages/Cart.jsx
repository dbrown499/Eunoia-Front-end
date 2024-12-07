import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styling/Cart.scss';
import SweaterPic from '../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png'

const API = import.meta.env.VITE_API_URL;

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

console.log(cart)
  
  const sizeCounts = (cart.pieces).reduce((acc, item) => {
    if (!acc[item.size]) {
      acc[item.size] = [];
    };

    acc[item.size].push(item);

    return acc;
  }, {});

  const totalDiscount = cart.pieces.reduce(
    (acc, item) => acc + 156.25 * 0.2,
    0
  );

  const totalTaxes = cart.pieces.reduce(
    (acc, item) => acc + 10,
    0
  );

  const totalPrice = cart.pieces.reduce(
    (acc, item) => acc + 156.25 * 0.8 + 10, 0
  );


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

  const addPriceToBackend = (e) => {
    e.preventDefault();


    fetch(`${API}/payments`, {
      method: 'POST',
      body: JSON.stringify({
        payment_method: "hey it worked!",
        amount: Number(totalPrice),
        nameofitem: cart.pieces[0].name,
        size: cart.pieces.forEach(fit => {
          fit.size
        }),
        quantity: cart.totalItems,
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => navigate(`/billing-details`))
    .catch(err => console.error(err));
  }


  return (
    <div className="cart-">
      <h2 className="cart-title">SHOPPING CART ({cart.totalItems})</h2>
      <div className="cart-header">
        <span>ITEM</span>
        <span>SIZE</span>
        <span>QTY</span>
      </div>
      {/* <div className="cart-items">
        {Object.entries(sizeCounts).map(([size, itemsForSize]) => (

          <div key={size} className="cart-item">
            <img src={SweaterPic} alt={itemsForSize[0].name} className="item-image" />
            <div className="item-details">
              <p className="item-description">{itemsForSize[0].description}</p>
              <h3 className="item-name">{itemsForSize[0].name}</h3>
              <p className="item-prices">
                <span className="original-price">$156.25</span>
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
      </div> */}


      <div className="cart-items">
        {Object.entries(sizeCounts).map(([size, itemsForSize]) => (

          <div key={size} className="cart-item">
            <img src={SweaterPic} className="item-image" />
            <div className="item-details">
              <p className="item-description">Cropped Hoodie</p>
              <h3 className="item-name">Kiss The Moment Good Bye</h3>
              <p className="item-prices">
                <span className="original-price">$156.25</span>
                <span className="sale-price">$125.00</span>
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
          <span>${totalDiscount.toFixed(2)}</span>
        </p>
        <p className="summary-line">
          <span>Shipping & Handling:</span>
          <span>${totalTaxes.toFixed(2)}</span>
        </p>
        <p className="summary-line">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </p>
        <Link to='/billing-details'>
          <button onClick={addPriceToBackend} className="checkout-button">CHECKOUT</button>
        </Link>
      </div>
      <Link to='/products' className="continue-shopping">continue shopping →
      </Link>
    </div>
  );
};

export default Cart;

