import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedItem from '../Components/SelectedItem.jsx';
import Breadcrumb from '../Components/Breadcrumbs.jsx';
import '../Styling/Show.scss';
import SweaterVeiw1 from "../../assets/D1F5312F-C63B-41DF-B241-7D81D44676E9.png";
import SweaterVeiw2 from "../../assets/IMG_1632.png";
import SweaterVeiw3 from "../../assets/IMG_1631.png";
import SweaterVeiw4 from "../../assets/IMG_2520.png";

const API = import.meta.env.VITE_API_URL;

const Show = ({cart, setCart}) => {
    const [itemInfo, setItemInfo] = useState([]);
    let { type } = useParams();

    // useEffect(() => {
    //     fetch(`${API}/products/${type}`)
    //         .then(res => res.json())
    //         .then(res => setItemInfo(res))
    //         .catch(err => console.log(err))
    // }, [type]);

    const images = [
        SweaterVeiw1, SweaterVeiw2, SweaterVeiw3, SweaterVeiw4
    ];

    return (
        <section className='selected-item'>
            <Breadcrumb/>
            <SelectedItem key={itemInfo.id} images={images} itemInfo={itemInfo} cart={cart} setCart={setCart}/>
        </section>
    )
}

export default Show;