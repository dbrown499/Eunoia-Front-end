import React from 'react';
import ProductList from "../Components/ProductList"
import '../Styling/Index.scss'
// import Item from '../Components/Item';


const Index = () => {
    return (
        <main>
            <h1 className='shop-title'>STORE</h1>
            <ProductList />
        </main>
    )
}

export default Index