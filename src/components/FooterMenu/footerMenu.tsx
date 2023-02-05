import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, unstable_HistoryRouter } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css'
import { IUser } from '../../types/types';
import UserSrvice from '../../services/user-service';

const FooterMenu = ({ active, setActive }) => {
    const naigate = useNavigate()
    const location = useLocation()
    const [backButton, setBackButton] = useState<boolean>(false)
    const [path, setPath] = useState<string>()
    const { store } = useContext(Context)
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        if (location.pathname.includes("/item/")) {
            setBackButton(true)
            setPath('catalog')
        } else {
            setBackButton(false)
        }
    }, [location])

    // Получаем пользователя 
    useEffect(() => {
        if (!user) {
            setInterval(() => {
                const getUser = async () => {
                    const User = await UserSrvice.getUser(store.username)
                    return setUser(User.data)
                }
                getUser()
            }, 1000)
        }
    }, [store, user])

    return (
        <>
        <div className={store.footerMenu ? "footermenu" : "footermenu hidden"}>
            <div onClick={() => {naigate(`/${path}`)}} className={backButton ? "footer_backbutton" : "footer_backbutton hide"}>
                <svg width="30" height="30" fill="none" stroke="#e5fd60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
                    <path d="M5.625 12h13.688"></path>
                </svg>
            </div>
            <div onClick={() => {window.scrollTo(0, 0); naigate('/')}} className="footermenu_link">
                <svg width="30" height="30" fill="none" stroke="#e5fd60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <path d="M9 22V12h6v10"></path>
                </svg>
            </div>
            <div onClick={() => {window.scrollTo(0, 0); naigate('/catalog')}} className="footermenu_link">
                <svg width="30" height="30" fill="none" stroke="#e5fd60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
                    <path d="M8 6h13"></path>
                    <path d="M8 12h13"></path>
                    <path d="M8 18h13"></path>
                    <path d="M3 6h.01"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M3 18h.01"></path>
                </svg>
            </div>
            <div onClick={() => {window.scrollTo(0, 0); naigate('/busket')}} className="footermenu_link">
                <svg width="30" height="30" fill="none" stroke="#e5fd60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <div className={!user?.shoppingCart.length ? "cartcount" : "cartcount cartcountShow"}>{user?.shoppingCart.length}</div>
            </div>
            <div onClick={() => {window.scrollTo(0, 0); naigate('/favorite')}} className="footermenu_link">
                <svg width="30" height="30" fill="none" stroke="#e5fd60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <div className={!user?.favoriteCart.length ? "favoritecount" : "favoritecount favoritecountShow"}>{user?.favoriteCart.length}</div>
            </div>
            <div onClick={() => {window.scrollTo(0, 0); naigate('/account')}}  className="footermenu_link">
                <svg width="30" height="30" fill="#e5fd60" stroke="#e5fd60" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm.094 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75ZM12 20.25a8.23 8.23 0 0 1-6.055-2.653C6.359 15.45 10.08 15 12 15s5.64.45 6.055 2.596A8.228 8.228 0 0 1 12 20.25Z"></path>
                </svg>
            </div>
        </div>
        </>
    );
}

export default FooterMenu