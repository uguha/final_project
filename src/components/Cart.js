import React, { useState, useEffect } from 'react';

import CartItem from './CartItem';
import store from '../redux/Store';

export default function Cart() {
  const [cartGoods, setCartGoods] = useState([]);
  useEffect(() => {
    function name(){
      const state = store.getState();
      setCartGoods(state);
    }
    name();
    const temp = store.subscribe(name);
    return function cleanup(){
      temp();
    }
  });
  const getTotal = () => {
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  const exist = cartGoods.length > 0;
  return (
    <>
      <div className="cart">
        <div className="content-cart">
          <h1 className="cart-title">Корзина</h1>
          {exist ?
          <div className="product-list">
            {cartGoods.map((product) => {
                return <CartItem key={product.id} {...product}/>
            })}
          </div> :
          <p className="cart__note">Ваша корзина пуста</p> }
        </div>
        { exist &&
        <div className="sidebar-cart">
          <p className="sidebar-title">Ваш заказ</p>
          <div className="sidebar-cart-total-block">
            <p className="total-text">Итого</p>
            <p className="total-price">{getTotal()}₽</p>
          </div>
        </div> }
      </div>
    </>
  );
}