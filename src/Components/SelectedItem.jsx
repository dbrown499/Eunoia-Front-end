import React, { useState } from 'react';
import '../Styling/Show.scss';

const SelectedItem = ({ images, itemInfo, cart, setCart }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState('');


    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleAddToCart = () => {
        if (!quantity) {
            alert('Please select a size and quantity before adding to cart');
            return;
        }else if(!size){
            alert('Please select a size and quantity before adding to cart');
            return;
        }

        const newCartItems = Array(quantity).fill({ ...itemInfo[0], size });
        console.log(cart.pieces)
        setCart({
            totalItems: cart.totalItems + quantity,
            pieces: [...cart.pieces, ...newCartItems],
        });
        alert("Item has been added to your cart!");
        return;
    }

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
                            {itemInfo && itemInfo[0] && <span className="current-price">${itemInfo[0].price.toFixed(2)}</span>}
                            <span className="original-price">$156.25</span>
                        </div>

                        <label htmlFor="size" className="size-label">Size *</label>
                        <select
                            id="size"
                            className="size-select"
                            value={size}
                            onChange={handleSizeChange}
                        >
                            <option value="">Select an option...</option>
                            <option value="Extra Small">Extra Small</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="X-Large">X-Large</option>
                            <option value="2X-Large">2X-Large</option>
                        </select>

                        <div className="actions">
                            <button className="quantity-btn" onClick={decrementQuantity}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="quantity-btn" onClick={incrementQuantity}>+</button>
                            <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
};


export default SelectedItem