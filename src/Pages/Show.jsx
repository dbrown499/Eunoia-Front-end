import React, { useState, useEffect } from 'react';
import SelectedItem from '../Components/SelectedItem.jsx';
// import '../Styling/App.scss';
// import { useParams } from 'react-router-dom';
// import OneItem from '../Components/OneItem';

// const API = import.meta.env.VITE_API_URL;

// const Show = ({cart, setCart}) => {
const Show = () => {
    // const [showItem, setShowItem] = useState([])
    // let { type } = useParams()

    // useEffect(() => {
    //     fetch(`${API}/clothes/${type}`)
    //         .then(res => res.json())
    //         .then(res => setShowItem(sortClothesBySize(res)))
    //         .catch(err => console.log(err))
    // }, [type])

    // const sortClothesBySize = (arr) => {
    //     let newArr = new Array()

    //     for (let item of arr) {
    //         if (item.type_of_clothing && item.size == 'small') {
    //             newArr.push(item)
    //         }
    //     }
    //     return newArr
    // }

    return (
        // <div>{showItem.map((oneItem) => {
        //     return (<OneItem key={oneItem.id} eachItem={oneItem} cart={cart} setCart={setCart}/>)
        // })
        // }</div>
        <section className='selected-item'>
            <h1>Home - Store - Kiss The Moment Goodbye </h1>
            <SelectedItem/>
        </section>
    )
}

export default Show