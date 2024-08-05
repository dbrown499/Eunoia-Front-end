import React from 'react'
import '../Styling/Item.scss'

const Item = (item) => {
    // const sortClothesByType = (obj) => {
    //     let newArr


    // }
    // console.log(item)
    return (
        <section className='each-item'>
            <div className='each-item-info'>
                <h1 className='each-item-name'>{`${item.eachItem.type_of_clothing}`.toUpperCase()}</h1>
                <div className='each-item-price'>${item.eachItem.price}</div>
                <p className='each-item-description'>{item.eachItem.description} </p>
                <label id="quantity-label" htmlFor="quantity">Quantity:</label><br />
                <input id='quantity' type="number" /><br />
                <button className='add-to-cart'>Add To Cart</button>
            </div>
            <div className='img-container'>
                {item.eachItem.type_of_clothing == "Sweaters" ? (<img id='sweater_img' src="../assets/IMG_2519.jpeg" alt="img" />) : null}
            </div>

        </section>
    )
}

export default Item