import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const OneItem = ({ eachItem, cart, setCart}) => {
    const [quantity, setQuantity] = useState(0);
    let { type } = useParams();

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    
    const passInfo = () => {
        return quantity;
    };

    const handleAddToCart = () => {
       const newCart = [...cart.pieces]

       for(let i = 0; i < quantity; i++){
           newCart.push(eachItem)
       }
        setCart({totalItems: parseInt(cart.totalItems) + parseInt(quantity), pieces: newCart})
    };

    return (
        <section className='each-item'>
            <div className='each-item-info'>
                <h1 className='each-item-name'>{eachItem.type_of_clothing.toUpperCase()}</h1>
                <div className='each-item-price'>${eachItem.price}</div>
                <p className='each-item-description'>{eachItem.description}</p>
                <label id="quantity-label" htmlFor="quantity">Quantity:</label><br />
                <input
                    id='quantity'
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                /><br />
                <button className='add-to-cart' onClick={handleAddToCart} >Add To Cart</button>
            </div>
            <div className='img-container'>
                {eachItem.type_of_clothing === "Sweaters" && (
                    <img id='sweater_img' src="../assets/IMG_2519.jpeg" alt="Sweater" />
                )}
            </div>
            <div>
                <Link to={`/clothes`} className='back'>← BACK</Link>
                </div>
        </section>
    );
};

export default OneItem;
