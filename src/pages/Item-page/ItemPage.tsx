import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { IProduct } from '../../types/types';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/style.css';
import './styles/sizes.css'
import 'swiper/css'

const ItemPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { store } = useContext(Context)
  const [size, setSize] = useState<string>()
  const [product, setProduct] = useState<IProduct>()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Получаем данные товара (бэкенд запрос)
  useEffect(() => {
    // Функция получения товара по :id 
    const itemId = location.pathname.split('/item/') 
    // Получаем товар
    // const Product = await store.getProduct(itemId)
    // setProduct(Product)
  }, [location])

  // Cостояния точек карусели
  useEffect(() => {
    // dots
    for (let i = 0; i <= 3; i++) {
      if (currentIndex === i) {
        document.querySelector(`.dot${i}`).classList.add('dot_active');
      } else {
        document.querySelector(`.dot${i}`).classList.remove('dot_active');
      }
    }
  }, [currentIndex]);

  // Когда выбрали размер показываем кнопку
  useEffect(() => {
    if (!size) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
          text: `Add to cart`,
          color: "#5482dd",
          text_color: "#fff"
      })
    }
  }, [size])

  // Функция при нажатии 
  useEffect(() => {
    tg.onEvent('mainButtonClicked', async () => {
      // Сначала делаем запрос на добавление в корзину
      // const AddedProduct = await store.addProductToBasket(product)
      navigate('/busket')
    })
    return () => {
        tg.offEvent('mainButtonClicked', () => {
          // const AddedProduct = await store.addProductToBasket(product)
          navigate('/busket')
        })
    }
  }, [navigate, store, product])

  return (
    <>
    <div className="itempage">
      <div className="slider">
        <Swiper navigation={true} slidesPerView={1} onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}>
          {product?.image.map((image) => (
            <SwiperSlide className='SwiperSlide'><img src={image} alt="img" className='sliderimage'></img></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="itemmenu">
        <div className="dots">
          <div className="dot dot0"></div>
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
        <div className="itemname">{product?.name}</div>
        <div className="itemprice">${product?.price}</div>
        <div className="choosesize_vidget">{size ? (<>Выбран: <span>{size}</span></>) : <>Выбранный размер</>}</div>
        <div className="sizes">
          <Swiper slidesPerView={6} navigation={true}>
            {product?.sizes.map(elem => ( <SwiperSlide><label><input onChange={(e) => setSize(e.target.value)} type="radio" value={elem} name="radio"/><span data-span="span">{elem}</span></label></SwiperSlide> ))}
          </Swiper>
        </div>
        <div className="itemdesc">{product?.descritpion}</div>        
      </div>
    </div>
    </>
  );
}

export default observer(ItemPage);