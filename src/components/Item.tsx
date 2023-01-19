import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

const Item = ({ product }) => {


  return (
    <>
    <div className="item">
      <Link to={`/item/${product.id}`}><img src={product.image} alt="1" className='image'/></Link>
      <div className="blocknameprice">
        <div className="name">{product.name}</div>
        <div className="price">${product.price}</div>
      </div>
    </div>
    </>
  );
}

export default Item;