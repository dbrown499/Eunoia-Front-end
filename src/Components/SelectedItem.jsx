import React, { useState } from 'react';
import '../Styling/Show.scss';
import SweaterPic from '../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png' 


const API = import.meta.env.VITE_API_URL;


const SelectedItem = ({ images, itemInfo, cart, setCart }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState('');


    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        const selectedSize = size;

        // Use an asynchronous function to fetch stock
    //     const fetchStock = async () => {
    //         try {
    //             const stockResponse = await fetch(`${API}/products/${selectedSize}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });

    //             // console.log(quantity)

    //             if (!stockResponse.ok) {
    //                 throw new Error('Failed to fetch current stock');
    //             }

    //             const stockData = await stockResponse.json();
    //             const currentStock = stockData[0].stock; // Assuming the response has a `stock` property

    //             if (!size) {
    //                 alert(`Select a size`);
    //                 return;
    //             }
    //             if (currentStock <= 0) {
    //                 alert(`Product in a size ${stockData[0].size} is out of stock!`);
    //                 setSize("SOLD OUT");
    //                 return;
    //             } else if (currentStock < quantity + 1) {

    //                 alert(`Only ${stockData[0].stock} ${stockData[0].type} is available in a size ${stockData[0].size}.`);
    //                 return;
    //             }
    //             setQuantity(prevQuantity => prevQuantity + 1);
    //             // setSize(selectedSize); // Update the state only if the stock is available
    //         } catch (error) {
    //             console.error('Error fetching stock:', error.message);
    //         }
    //     };

    //     fetchStock(); // Call the asynchronous function

    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    };


    const handleAddToCart = () => {
        if (!quantity) {
            alert('Please select a size and quantity before adding to cart');
            return;
        } else if (!size) {
            alert('Please select a size and quantity before adding to cart');
            return;
        }

        const newCartItems = Array(quantity).fill({ ...itemInfo[0], size });
        // console.log(newCartItems)
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
                    {/* <div className="product-form">
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
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>

                        <div className="actions">
                            <button className="quantity-btn" onClick={decrementQuantity}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="quantity-btn" onClick={incrementQuantity}>+</button>
                            <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                        </div>
                    </div> */}

                    <div className="product-form">
                        <h1 className="product-title">Kiss The Moment Good Bye <br /> Cropped Hoodie</h1>


                        <div className="price">
                            <span className="current-price">$125.00</span>
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
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
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


export default SelectedItem;