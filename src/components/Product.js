import React from 'react';
import { useParams } from 'react-router-dom';

import { products } from '../Data';
import ActionConsts from '../redux/ActionConsts';
import store from '../redux/Store';

import '../css/single-page.css'

export default function Product(){
    let idProduct = useParams().id;
    let product = products.filter((e) => e.id === +idProduct)[0];

    const addToCardHandler = (id) => {
        store.dispatch({
            type: ActionConsts.addGoodToCart,
            payload: {
                id: id
            }
        });

    }

    return (
        <div className="single-product">
            <div className="single-product-images">
                <img src={product.photo} className="single-product-image" alt={product.title}/>
                <img src={product.scheme} className="single-product-scheme" alt={"scheme " + product.title}/>
            </div>
            <div className="main-information">
                <p className="single-product-title">{product.title}</p>
                <p className="single-product-price">{product.price}₽</p>
                <button className="add-basket" onClick={() => addToCardHandler(product.id)}>Добавить в корзину</button>
            </div>
        </div>
    );
}