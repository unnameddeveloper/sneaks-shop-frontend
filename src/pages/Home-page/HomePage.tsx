import React, { FC, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemArray } from '../../assets/productArr'
import { tg } from '../../hooks/useTelegram';
import Footer from '../../components/Footer';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'
import 'swiper/css'


const HomePage: FC = () => {
  const { store } = useContext(Context)
  const navigate = useNavigate()

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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var scrolled = window.pageYOffset;
      var parallax = document.getElementById('parallax');
      if (parallax) {
        parallax.style.backgroundPositionY = (scrolled * 0.2) + "px";
      }
    });
  })

  const scrollDown = () => {
    var target = document.getElementById("username_vidget");
    var targetPosition = target.getBoundingClientRect();
    var y = targetPosition.top + window.scrollY - 120
    window.scrollTo({
      top: y,
      behavior: 'smooth'});
  }


  return (
    <>
    <div id="parallax" className="homediv">
        <div className="companyname" data-aos="fade-up" data-aos-duration="600">SNEAKS STORE</div>
        <div className="extratitle" data-aos="fade-up" data-aos-duration="600">Жизнь. Спорт. Кроссовки</div>
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
      <div className="vidget_h1">ПОПУЛЯРНОЕ</div>
      <div className="marketing_vidget" data-aos="fade-up" data-aos-duration="600">
        <Swiper navigation={true} slidesPerView={1}>
            {ItemArray.map(item => (
              <SwiperSlide>
                  <Item product={item}/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
    <div className="homepage">
      <div className="goincatalogimg" onClick={() => {navigate('/catalog'); window.scrollTo(0, 0)}}><div className="goincatalogbutton">Каталог</div></div>
    </div>
    <Footer/>
    </>
  );
}

export default observer(HomePage);