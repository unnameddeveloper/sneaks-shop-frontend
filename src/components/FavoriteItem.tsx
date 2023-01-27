import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoriteItem = ({ product }) => {
  const [productName, setProductName] = useState('')
  const navigate = useNavigate()

  const trimSentence = (sentence: any) => {
    return sentence.substring(0, 17) + "...";
  }

  useEffect(() => {
    if (product.name.length > 17) {
      const correctName = trimSentence(product?.name)
      setProductName(correctName)
    } else {
      setProductName(product?.name)
    }
    return () => {
      if (product.name.length > 17) {
        const correctName = trimSentence(product?.name)
        setProductName(correctName)
      } else {
        setProductName(product?.name)
      }
    }
  }, [productName, product])

  return (
    <>
    <div className="favoriteitem" key={product.id}>
      <label><input type="checkbox" id={product.id}/><span data-type="circlespan"></span></label>
      <img onClick={() => {navigate(`/item/${product.id}`); window.scrollTo(0, 0)}} src={product.images[0]} alt='' className="cartitem_image"></img>
      <div className="item_info" onClick={() => {navigate(`/item/${product.id}`); window.scrollTo(0, 0)}}>
        <div className="cartitem_name item_info_field">{productName}</div>
        <div className="cartitem_choosensize item_info_field">Размер: {product.choosenSize}</div>
        <div className="cartitem_price item_info_field">${product.price}</div>
      </div>
      <div className="deleteitem_field"><div className="deleteitem_button"></div></div>      
    </div>
    </>
  );
}

export default FavoriteItem