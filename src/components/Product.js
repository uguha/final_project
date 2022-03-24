import React from 'react';
import { useParams } from 'react-router-dom';

import { products } from '../Data';

import '../css/single-page.css'

function Product(){
    let idProduct = useParams().id;
    let product = products.filter((e) => e.id === +idProduct)[0];
    return (
        <div className="single-product">
            <div className="single-product-images">
                <img src={product.photo} className="single-product-image" alt={product.title}/>
                <img src={product.scheme} className="single-product-scheme" alt={"scheme " + product.title}/>
            </div>
            <div className="main-information">
                <p className="single-product-title">{product.title}</p>
                <p className="single-product-price">{product.price}</p>
                <button className="add-basket">Добавить в корзину</button>
            </div>
        </div>
    );
}

export default Product