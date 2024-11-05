import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import OneItem from '../Components/OneItem';

// const API = import.meta.env.VITE_API_URL;

const Show = ({cart, setCart}) => {
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
        <div>hey</div>
    )
}

export default Show