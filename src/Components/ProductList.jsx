import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Styling/Index.scss';
import SweaterPic from '../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png' 

const API = import.meta.env.VITE_API_URL;

const ProductList = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`${API}/products`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setProducts(res)
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    // const sortedProducts = products.reduce((acc, product) => {
    //     const type = product.type;
        
    //     if (!acc[type]) {
    //         acc[type] = [];
    //     }
        
    //     acc[type].push(product);
        
    //     return acc;
    // }, {});

    
    // const groupedProductsArray = Object.values(sortedProducts);
    
    
    return (
        // <section className='items-container'>
        //     {groupedProductsArray.map((sect, groupIndex) => (
        //         <div className='product-group' key={groupIndex}>
        //                  <section className='item-section' key={groupIndex}>
        //                  <Link to={`/products/${sect[0].type}`} className="item-link">
        //                      <img 
        //                          className='item-img'
        //                          src={sect[0].type === 'sweater' ? "../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png" : " "} 
        //                          alt={`${sect[0].type} photo`} 
        //                      />
        //                      <p className='item-description'>
        //                          {sect[0].name}<br />
        //                          {sect[0].description}
        //                      </p>
        //                  </Link>
        //                  <div className='price'>
        //                  <p className='item-original-price'>$156.25</p>
        //                  <p className='item-price'>${sect[0].price.toFixed(2)}</p>
        //                  </div>
        //              </section>
        //         </div>
        //     ))}
        // </section>
        <section className='items-container'>
                <div className='product-group' >
                         <section className='item-section' >
                         <Link to={`/products/Sweater`} className="item-link">
                             <img 
                                 className='item-img'
                                 src={SweaterPic} 
                             />
                             <p className='item-description'>
                                 Kiss The Moment Good Bye<br />
                                 Cropped Hoodie
                             </p>
                         </Link>
                         <div className='price'>
                         <p className='item-original-price'>$156.25</p>
                         <p className='item-price'>$125.00</p>
                         </div>
                     </section>
                </div>
        </section>
    );
}    
export default ProductList


//used to see what is being rendered on screen 
//<pre>{JSON.stringify(products, null, 2)}</pre>
