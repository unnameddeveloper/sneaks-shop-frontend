import React, { FC, useContext, useEffect } from 'react';
import { ItemArray } from '../../assets/productArr'
import { tg } from '../../hooks/useTelegram';
import Footer from '../../components/Footer';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'


const HomePage: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.setUsername(window?.Telegram?.WebApp?.initDataUnsafe?.user?.username)
    tg.MainButton.hide()
  }, [store])

  useEffect(() => {
    AOS.init()
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        store.setFooterMenu(true)
      } else {
        store.setFooterMenu(false)
      }
    })
  }, [store])

  const scrollUp = () => {
    var target = document.getElementById("filtertarget");
    var targetPosition = target.getBoundingClientRect();
    var offsetPosition = targetPosition.top + window.pageYOffset;
    window.scrollTo({
      top: offsetPosition,
      left: 0,
      behavior: 'smooth'});
  }

  const scrollDown = () => {
    var target = document.getElementById("username_vidget");
    var targetPosition = target.getBoundingClientRect();
    var offsetPosition = targetPosition.top + window.pageYOffset;
    window.scrollTo({
      top: offsetPosition,
      left: 0,
      behavior: 'smooth'});
  }


  return (
    <>
    <div className="homediv" data-aos="fade-up" data-aos-duration="600">
        <div className="companyname">SNEAKS STORE</div>
        <div className="extratitle">Жизнь. Спорт. Кроссовки</div>
        <div className="line"></div>
        <div className="check" onClick={scrollDown}>
          <svg width="23" height="23" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
    </div>
    <div id="username_vidget" className="username_vidget" data-aos="fade-up" data-aos-duration="600"><div className="username">Привет! @{window?.Telegram?.WebApp?.initDataUnsafe?.user?.username}</div></div>
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
      <div className="filter" id='filtertarget'>Рекомендации:</div>
      { ItemArray.map(item => (<Item product={item}/>)) }
      <div className="scrollup" onClick={scrollUp} data-aos="fade-up" data-aos-duration="500">Вверх</div>
    </div>
    <Footer/>
    </>
  );
}

export default observer(HomePage);