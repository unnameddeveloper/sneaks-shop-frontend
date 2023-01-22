import { IProduct, IProductInCart } from '../types/types';
import { Routes, Route, Link } from 'react-router-dom';
import '../pages/Buscket-page/styles/style.css'
import React, { FC, useState } from 'react';

const LoadingComponent = ({active, setActive}) => {
  return (
    <>
    <div className={active ? "loading_component active" : "loading_component"}>
      <div className="loadspinner">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
      </div>
    </div>
    </>
  );
}

export default LoadingComponent