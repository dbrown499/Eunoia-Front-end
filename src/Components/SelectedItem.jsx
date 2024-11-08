import React, { useState } from 'react';

const SelectedItem = ({ images, itemInfo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };


  // Function to handle incrementing quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing quantity (ensure it doesn't go below 1)
  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

    return (
        <>
        
            <div className="product-container">

                <section className="img-holder">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`img-test ${index === currentIndex ? 'active-thumbnail' : ''}`}
                            src={image}
                            alt="Thumbnail"
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </section>

                <section className="image-carousel">
                    <img
                        src={images[currentIndex]}
                        alt="Product"
                        className="product-image"
                    />
                    <div className="dots-container">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="product-form">
                    {itemInfo && itemInfo[0] && <h1 className="product-title">{itemInfo[0].name} <br /> {itemInfo[0].description}</h1>}


                        <div className="price">
                        {itemInfo && itemInfo[0] && <span className="current-price">${itemInfo[0].price}</span>}
                            <span className="original-price">$159.00</span>
                        </div>

                        <label htmlFor="size" className="size-label">Size *</label>
                        <select id="size" className="size-select">
                            <option>Select an option...</option>
                            <option>Extra Small</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>X-Large</option>
                            <option>2X-Large</option>
                        </select>

                        {/* <div className="cart-summary">
                            <p>1x Kanye West Donda Atlanta Listening Event L/S T shirt Cream</p>
                            <span className="summary-price">$109.00</span>
                        </div> */}
{/* 
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span>$109.00</span>
                        </div> */}

<div className="actions">
      <button className="quantity-btn" onClick={decrementQuantity}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="quantity-btn" onClick={incrementQuantity}>+</button>
      <button className="add-to-cart">Add to cart</button>
    </div>
                    </div>

                </section>
            </div>
        </>
    )
};


export default SelectedItem