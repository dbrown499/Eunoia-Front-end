import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Styling/ProductList.scss';

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
        const type = product.type;
        
        if (!acc[type]) {
            acc[type] = [];
        }
        
        acc[type].push(product);
        
        return acc;
    }, {});
    
    const groupedProductsArray = Object.values(sortedProducts);
    
    console.log(sortedProducts); // Object with each product type as keys
    console.log(groupedProductsArray); // Array of subarrays, one for each type
    

    return (
        <section className='items-container'>
            {groupedProductsArray.map((sect, groupIndex) => (
                <div className='product-group' key={groupIndex}>
                         <section className='item-section' key={groupIndex}>
                         <Link to={`/products/${sect[0].type}`} className="item-link">
                             <img 
                                 className='item-img'
                                 src={sect[0].type === 'Sweater' ? "assets/IMG_2519.jpeg" : "assets/0521152011_664c3d1bdbbc2.jpg"} 
                                 alt={`${sect[0].type} photo`} 
                             />
                             <p className='item-description'>
                                 {sect[0].name}<br />
                                 {sect[0].description}
                             </p>
                         </Link>
                         <p className='item-price'>${sect[0].price}</p>
                     </section>
                </div>
            ))}
        </section>
    );
}    
export default ProductList


//used to see what is being rendered on screen 
//<pre>{JSON.stringify(products, null, 2)}</pre>
