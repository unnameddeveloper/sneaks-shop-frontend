import { IProduct, IProductInCart } from '../../types/types';
import { Routes, Route, Link } from 'react-router-dom';
import React, { FC, useState } from 'react';
import './styles/style.css'

const FooterMenu = ({ active, setActive }) => {

  return (
    <>
    <div className="footermenu">
        <Link to='/' className="footermenu_link">
            <svg width="30" height="30" fill="none" stroke="#80a8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <path d="M9 22V12h6v10"></path>
            </svg>
        </Link>
        <Link to='/catalog' className="footermenu_link">
            <svg width="30" height="30" fill="none" stroke="#80a8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6h13"></path>
                <path d="M8 12h13"></path>
                <path d="M8 18h13"></path>
                <path d="M3 6h.01"></path>
                <path d="M3 12h.01"></path>
                <path d="M3 18h.01"></path>
            </svg>
        </Link>
        <Link to='/busket' className="footermenu_link">
            <svg width="30" height="30" fill="#fff" stroke="#80a8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
        </Link>
        <Link to='/favorite' className="footermenu_link">
            <svg width="30" height="30" fill="none" stroke="#80a8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </Link>
        <Link to='/account' className="footermenu_link">
            <svg width="30" height="30" fill="#80a8ff" stroke="#80a8ff" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm.094 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75ZM12 20.25a8.23 8.23 0 0 1-6.055-2.653C6.359 15.45 10.08 15 12 15s5.64.45 6.055 2.596A8.228 8.228 0 0 1 12 20.25Z"></path>
            </svg>
        </Link>
    </div>
    </>
  );
}

export default FooterMenu