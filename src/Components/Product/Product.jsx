import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = ({ product, handleAddToCart }) => {
    const { img, seller, price, name, quantity, ratings } = product;
    // console.log(handleAddToCart);
    return (
        <div className='product'>
            <img src={img}></img>
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;