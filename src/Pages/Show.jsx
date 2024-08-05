import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const API = import.meta.env.VITE_API_URL;

const Show = () => {
    const [showItem, setShowItem] = useState({})
    let { id } = useParams()

    useEffect(()=>{
        fetch(`${API}/clothes/${id}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [id])


    
  return (
    <div>Show</div>
  )
}

export default Show