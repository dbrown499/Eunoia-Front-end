import React, { useState, useEffect } from 'react';
import SelectedItem from '../Components/SelectedItem.jsx';
import '../Styling/ProductList.scss';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs.jsx';
// import OneItem from '../Components/OneItem';

const API = import.meta.env.VITE_API_URL;

// const Show = ({cart, setCart}) => {
const Show = () => {
    const [itemInfo, setItemInfo] = useState([]);
    let { type } = useParams();

    useEffect(() => {
        fetch(`${API}/products/${type}`)
            .then(res => res.json())
            .then(res => setItemInfo(res))
            .catch(err => console.log(err))
    }, [type]);

    // const sortClothesBySize = (arr) => {
    //     let newArr = new Array()

    //     for (let item of arr) {
    //         if (item.type_of_clothing && item.size == 'small') {
    //             newArr.push(item)
    //         }
    //     }
    //     return newArr
    // }
    const images = [
        "../../assets/IMG_1629.png",
        "../../assets/IMG_1632.png",
        "../../assets/IMG_1631.png",  
        "../../assets/IMG_2520.png"  // Add more images as needed
    ];

    return (
        // <div>{showItem.map((oneItem) => {
        //     return (<OneItem key={oneItem.id} eachItem={oneItem} cart={cart} setCart={setCart}/>)
        // })
        // }</div>
        <section className='selected-item'>
            <Breadcrumb/>
            <SelectedItem images={images} itemInfo={itemInfo}/>
        </section>
    )
}

export default Show