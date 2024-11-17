import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedItem from '../Components/SelectedItem.jsx';
import Breadcrumb from '../Components/Breadcrumbs.jsx';
import '../Styling/Show.scss';

const API = import.meta.env.VITE_API_URL;

const Show = ({cart, setCart}) => {
    const [itemInfo, setItemInfo] = useState([]);
    let { type } = useParams();

    useEffect(() => {
        fetch(`${API}/products/${type}`)
            .then(res => res.json())
            .then(res => setItemInfo(res))
            .catch(err => console.log(err))
    }, [type]);

    const images = [
        "../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png",
        "../../assets/IMG_1632.png",
        "../../assets/IMG_1631.png",  
        "../../assets/IMG_2520.png"  // Add more images as needed
    ];

    return (
        <section className='selected-item'>
            <Breadcrumb/>
            <SelectedItem key={itemInfo.id} images={images} itemInfo={itemInfo} cart={cart} setCart={setCart}/>
        </section>
    )
}

export default Show