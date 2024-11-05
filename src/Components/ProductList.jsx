import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import '../Styling/ProductList.scss'

const API = import.meta.env.VITE_API_URL;

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${API}/products`)
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err))
    }, []);

    const sortedProducts = products.reduce((acc, product) => {
        if (product.type === 'Sweater') {
            acc[0].push(product);
        } else {
            acc[1].push(product);
        }
        return acc;
    }, [[], []]);

    return (
        <section className='items-container'>
            {sortedProducts.map((sect, index) => (
                <section className='item-section' key={index}>
                    {sect[0] && (
                        <img className='item-img'
                            src={sect[0].type === 'Sweater' ? "assets/IMG_2519.jpeg" : "assets/0521152011_664c3d1bdbbc2.jpg"} 
                            alt="sweater photo" 
                        />
                    )}
                    {sect[0] &&  <p className='item-description'>{sect[0].name}<br />{ sect[0].description }</p>}
                   
                    {sect[0] && <p className='item-price'>${sect[0].price}</p>}
                </section>
            ))}
        </section>
    );
}    
export default ProductList


//used to see what is being rendered on screen 
//<pre>{JSON.stringify(products, null, 2)}</pre>
