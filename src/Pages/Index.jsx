import React, { useState, useEffect } from 'react';
import Item from '../Components/Item';

const API = import.meta.env.VITE_API_URL;

const Index = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch(`${API}/clothes`)
            .then(res => res.json())
            .then(res => setClothes(sortClothesByType(res)))
            .catch(err => console.log(err))
    }, []);

    const sortClothesByType = (arr) => {
        let newArr = new Array()

        for (let item of arr) {
            if (item.type_of_clothing && item.size === 'medium') {
                newArr.push(item)
            }
        }
        return newArr
    }

    return (
        <>
           
            <div>
                {clothes.map((item) => {
                    return (<Item key={item.id} eachItem={item} />)
                })}

            </div>

        </>
    )
}

export default Index