import React, { FC, useState } from 'react';

const OrderItem = ({ product, date, shipdate, orderstatus, choosensize, orderprice }) => {

  return (
    <>
    <div className="orderitem" key={product.id}>
        <div className="orderinfo">
            <div className="orderdate">{date}</div>
            <div className="orderid">3211232-{product.id}</div>
        </div>
        <div className="deliveryinfo">
            <div className="deliverytype">Доставка курьером</div>
            <div className="deliverydate">Будет доставлено: {shipdate}</div>
        </div>
        <div className="orderstatus"><span>Статус:</span><span>{orderstatus}</span></div>
        <div className="cartitem">
        <img src={product.images[0]} alt='' className="cartitem_image"></img>
            <div className="item_info">
                <div className="cartitem_name item_info_field">{product.name}</div>
                <div className="cartitem_choosensize item_info_field">Размер: {choosensize}</div>
                <div className="cartitem_price item_info_field">Стоимость заказа: ${orderprice}</div>
            </div>  
        </div>
    </div>
    </>
  );
}

export default OrderItem