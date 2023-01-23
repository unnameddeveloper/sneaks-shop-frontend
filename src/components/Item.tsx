// import React, { useState } from 'react';
import { IProduct } from '../types/types';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { FC } from 'react';

const Item = ({product}) => {

  const scrollup = () => {
      window.scrollTo(0, 0)
  }

  return (
    <>
    <div className="item" data-aos="fade-up" data-aos-duration="600">
      <Link to={`/item/${product.id}`} onClick={scrollup}><img src={product.image[0]} alt="1" className='image'/></Link>
      <div className="blocknameprice">
        <div className="name">{product.name}</div>
        <div className="price">${product.price}</div>
      </div>
    </div>
    </>
  );
}

export default Item;