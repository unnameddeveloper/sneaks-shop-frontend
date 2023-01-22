import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { IProduct } from '../../types/types';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/style.css';
import './styles/sizes.css'
import 'swiper/css'

const ItemArray = [
  { id: "1", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/1.webp", name: "Zoom Freak 4 NRG", price: 199},
  { id: "2", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/2.webp", name: "Nike Air Force 1 '07", price: 380},
  { id: "3", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/3.webp", name: "Nike Court Vision Low", price: 189},
  { id: "4", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/4.webp", name: "Nike Blazer Mid '77", price: 499},
  // { id: "5", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/5.webp", name: "Nike Air More Uptempo", price: 299},
  // { id: "6", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/6.webp", name: "Air Jordan 1 Mid", price: 949},
  // { id: "7", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/7.webp", name: "Nike Air More Uptempo", price: 388},
  // { id: "8", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/8.webp", name: "Nike Air Max Alpha", price: 799},
  // { id: "9", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/9..webp", name: "Zoom Freak 4", price: 189},
  // { id: "10", image: "https://storage.yandexcloud.net/sneaks-shop-bucket/sneaks-image/10.webp", name: "Jordan Series .06", price: 399},
]

const SizeArray = [
  { size: "36" },
  { size: "37" },
  { size: "38" },
  { size: "39" },
  { size: "40" },
  { size: "41" },
  { size: "42" },
  { size: "43" },
  { size: "44" },
]

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
    async function getProduct() {
      // const Product = await UserSrvice.getProduct()
      // setProduct(Product)
    }
    getProduct()
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
      return navigate('/busket')
    })
    return () => {
        tg.offEvent('mainButtonClicked', () => {
          navigate('/busket')
        })
    }
  }, [navigate, store, product])

  return (
    <>
    <div className="itempage">
      <Link to="/" className="backbutton">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
      </Link>
      <div className="slider">
        <Swiper navigation={true} slidesPerView={1} onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}>
          {ItemArray.map((item) => (
            <SwiperSlide className='SwiperSlide'><img src={item.image} alt="img" className='sliderimage'></img></SwiperSlide>
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
        <div className="itemname">{ItemArray[0].name}</div>
        <div className="itemprice">${ItemArray[0].price}</div>
        <div className="choosesize_vidget">{size ? (<>Choosen: <span>{size}</span></>) : <>Choose size</>}</div>
        <div className="sizes">
          <Swiper slidesPerView={6} navigation={true}>
            {SizeArray.map(elem => ( <SwiperSlide><label><input onChange={(e) => setSize(e.target.value)} type="radio" value={elem.size} name="radio"/><span data-span="span">{elem.size}</span></label></SwiperSlide> ))}
          </Swiper>
        </div>
        <div className="itemdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus possimus quasi temporibus nam ipsum dolorum, quisquam quis aut</div>        
      </div>
    </div>
    </>
  );
}

export default observer(ItemPage);