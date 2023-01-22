import { IProduct, IProductInCart } from '../types/types';
import { Routes, Route, Link } from 'react-router-dom';
import React, { FC, useState } from 'react';

const CartItem = ({ product }) => {

  return (
    <>
    <div className="cartitem" data-aos="fade-up" data-aos-duration="600">
        <div className="cartitem_image"><img src={product.image} alt="img"/></div>
        <div className="cartitem_name">{product.name}</div>
        <div className="cartitem_description">{product.descritpion}</div>
        <div className="cartitem_price">{product.price}</div>
        <div className="cartitem_choosensize">{product.size}</div>
        <div className="deleteitem_button">Delete icon</div>
    </div>
    </>
  );
}

export default CartItem