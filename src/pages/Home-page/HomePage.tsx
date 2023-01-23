import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { tg } from '../../hooks/useTelegram';
import Footer from '../../components/Footer';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'


const HomePage: FC = () => {
  const [addedItems, setAddedItem] = useState([])
  const { store } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    store.setUsername(window?.Telegram?.WebApp?.initDataUnsafe?.user?.username)
    store.setUserPhoto(window?.Telegram?.WebApp?.initDataUnsafe?.user?.photo_url)
    tg.MainButton.hide()
  }, [store])

  useEffect(() => {
    AOS.init()
  })

  const ItemArray = [
    { id: "1", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/1.webp", name: "Zoom Freak 4 NRG", price: 199},
    { id: "2", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/2.webp", name: "Nike Air Force 1 '07", price: 380},
    { id: "3", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/3.webp", name: "Nike Court Vision Low", price: 189},
    { id: "4", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/4.webp", name: "Nike Blazer Mid '77", price: 499},
    { id: "5", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/5.webp", name: "Nike Air More Uptempo", price: 299},
    { id: "6", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/6.webp", name: "Air Jordan 1 Mid", price: 949},
    { id: "7", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/7.webp", name: "Nike Air More Uptempo", price: 388},
    { id: "8", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/8.webp", name: "Nike Air Max Alpha", price: 799},
    { id: "9", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/9..webp", name: "Zoom Freak 4", price: 189},
    { id: "10", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/10.webp", name: "Jordan Series .06", price: 399},
  ]

  const scrollUp = () => {
    var target = document.getElementById("filtertarget");
    var targetPosition = target.getBoundingClientRect();
    var offsetPosition = targetPosition.top + window.pageYOffset;
    window.scrollTo({
      top: offsetPosition,
      left: 0,
      behavior: 'smooth'});
  }

  return (
    <>
    <div className="homediv">
        <div className="companyname">SNEAKS STORE</div>
        <div className="svg-loader">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 226.8 227" xmlSpace="preserve">
          <path className="st0" d="M0,112.8L89.8 202.6 176.8 115.5 135.9 74.6 88.2 122.1 78.9 112.8 117.2 74.5 122.5 79.8 122.5 55.2 98.1 55.4 102.2 59.4 47.4 114.2 85.8 152.4 134.5 103.7 143.9 112.9 86.8 170 29.5 113.5 111.6 31.4 194.7 113.1 97.7 210.5 114.2 227 226.8 113.5 112.8 0 z"></path>
          </svg>
        </div>
    </div>
    <div className="username_vidget" data-aos="fade-up" data-aos-duration="600"><div className="username">Hello! @{window?.Telegram?.WebApp?.initDataUnsafe?.user?.username}</div></div>
    <div className="vidgets">
      <div className="marketing_vidget" data-aos="fade-right" data-aos-duration="600">
        <img src="https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/shoes.png" alt="img"/>
      </div>
      <div className="vidgets_2">
        <div className="busket_vidget" data-aos="fade-left" data-aos-duration="1000">
          <Link to="/busket" className='busket'>
            <svg fill="#80a8ff" height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
              <g>
                <circle cx="58.182" cy="221.091" r="11.636"/>
              </g>
            </g>
            <g>
              <g>
                <circle cx="453.818" cy="221.091" r="11.636"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M151.273,314.182c-6.982,0-11.636,4.655-11.636,11.636v93.091c0,6.982,4.655,11.636,11.636,11.636
                  c6.982,0,11.636-4.655,11.636-11.636v-93.091C162.909,318.836,158.255,314.182,151.273,314.182z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M221.091,314.182c-6.982,0-11.636,4.655-11.636,11.636v93.091c0,6.982,4.655,11.636,11.636,11.636
                  c6.982,0,11.636-4.655,11.636-11.636v-93.091C232.727,318.836,228.073,314.182,221.091,314.182z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M290.909,314.182c-6.982,0-11.636,4.655-11.636,11.636v93.091c0,6.982,4.655,11.636,11.636,11.636
                  s11.636-4.655,11.636-11.636v-93.091C302.545,318.836,297.891,314.182,290.909,314.182z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M360.727,314.182c-6.982,0-11.636,4.655-11.636,11.636v93.091c0,6.982,4.655,11.636,11.636,11.636
                  s11.636-4.655,11.636-11.636v-93.091C372.364,318.836,367.709,314.182,360.727,314.182z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M477.091,162.909h-38.4l-27.927-91.927c-3.491-13.964-17.455-24.436-32.582-24.436h-29.091V34.909
                  c0-6.982-4.655-11.636-11.636-11.636H174.545c-6.982,0-11.636,4.655-11.636,11.636v11.636h-18.618
                  c-15.127,0-27.927,8.145-32.582,22.109l-38.4,94.255h-38.4C15.127,162.909,0,178.036,0,197.818v46.545
                  c0,19.782,15.127,34.909,34.909,34.909h1.164l19.782,178.036c2.327,18.618,17.455,31.418,34.909,31.418h330.473
                  c17.455,0,32.582-12.8,34.909-31.418l19.782-178.036h1.164c19.782,0,34.909-15.127,34.909-34.909v-46.545
                  C512,178.036,496.873,162.909,477.091,162.909z M186.182,46.545h139.636v23.273H186.182V46.545z M489.891,244.364h-1.164
                  c0,6.982-4.655,11.636-11.636,11.636h-11.636H93.091c-6.982,0-11.636,4.655-11.636,11.636s4.655,11.636,11.636,11.636h359.564
                  l-19.782,175.709c-1.164,5.818-5.818,10.473-11.636,10.473H90.764c-5.818,0-10.473-4.655-11.636-10.473L58.182,266.473
                  C57.018,260.655,52.364,256,46.545,256H34.909c-6.982,0-11.636-4.655-11.636-11.636v-46.545c0-6.982,4.655-11.636,11.636-11.636
                  h46.545H384c6.982,0,11.636-4.655,11.636-11.636s-4.655-11.636-11.636-11.636H98.909L132.655,76.8
                  c2.327-4.655,5.818-6.982,11.636-6.982h18.618v11.636c0,6.982,4.655,11.636,11.636,11.636h162.909
                  c6.982,0,11.636-4.655,11.636-11.636V69.818h29.091c4.655,0,9.309,3.491,11.636,8.145l30.255,100.073
                  c1.164,4.655,5.818,8.145,11.636,8.145h46.545c6.982,0,11.636,4.655,11.636,11.636V244.364z"/>
              </g>
            </g>
            </svg>
          </Link>
        </div>
        <Link to="/account" className="account_vidget" data-aos="fade-left" data-aos-duration="1000">
          <svg width="70" height="70" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm.094 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75ZM12 20.25a8.23 8.23 0 0 1-6.055-2.653C6.359 15.45 10.08 15 12 15s5.64.45 6.055 2.596A8.228 8.228 0 0 1 12 20.25Z"></path>
          </svg>
        </Link>
      </div>
    </div>
    <div className="homepage">
      <div className="filter" id='filtertarget'>All categories:</div>
      { ItemArray.map(item => (<Item product={item}/>)) }
      <div className="scrollup" onClick={scrollUp} data-aos="fade-up" data-aos-duration="500">Scroll up</div>
    </div>
    <Footer/>
    </>
  );
}

export default observer(HomePage);