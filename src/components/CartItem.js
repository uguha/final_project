import React from 'react';

import store from '../redux/Store';
import ActionConsts from '../redux/ActionConsts';

import '../css/App.css';

export default function CartItem(props) {

    const deleteFromCardHandler = (id) => {
        store.dispatch({
            type: ActionConsts.deleteGoodFrom,
            payload: {
                id: id
            }
        });
    }
    return (
        <div className="product-list-item">
            <img src={props.photo} alt={props.title} className="product-list-item-image"/>
            <div className="product-list-item-info">
                <div className="product-list-item-action-and-title">
                    <p className="product-list-item-title">{props.title}</p>
                    <button className="product-list-item-delete" onClick={() => deleteFromCardHandler(props.id)}>Удалить товар</button>
                </div>
                <p className="product-list-item-price">{props.price}₽</p>
            </div>
        </div>
    );
}