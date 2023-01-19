import React, { useContext, useEffect, useState } from 'react';
import { tg, WebApp } from '../../hooks/useTelegram';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage = () => {
  const { store } = useContext(Context)
  // Получаем информацию о добавленных товарах в корзину
  useEffect(() => {

  }, [])

  return (
    <>
      <div className="busketpage">
        User: {store.username}
      </div>
    </>
  );
}

export default BusketPage;