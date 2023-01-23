import { IProduct, IProductInCart } from '../types/types';
import { Routes, Route, Link } from 'react-router-dom';
import React, { FC, useState } from 'react';

const CartItem = ({ product }) => {

  return (
    <>
    <div className="cartitem">
      <div className="cartitem_image">{product.image}</div>
          <div className="item_info">
            <div className="cartitem_name item_info_field">{product.name}</div>
            <div className="cartitem_choosensize item_info_field">Choosen size</div>
            <div className="cartitem_price item_info_field">Product price</div>
          </div>
        <div className="deleteitem_field"><div className="deleteitem_button"></div></div>      
    </div>
    </>
  );
}

export default CartItem