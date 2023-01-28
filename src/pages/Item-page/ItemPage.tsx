import { IProduct, IProductInCart, IUser } from '../../types/types';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StoreService from '../../services/store-service';
import UserSrvice from '../../services/user-service';
import { ItemArray } from '../../assets/productArr';
import { Swiper, SwiperSlide } from 'swiper/react'
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/style.css';
import 'swiper/css'

const ItemPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()
  const [size, setSize] = useState<string>()
  const [product, setProduct] = useState<IProduct>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentItem, setCurrentItem] = useState<boolean>(false)

  const addProductInFavorite = async () => {
    if (currentItem) {
      console.log("удаляем");
      return await onDelete(product.id)
    }
    const addedproduct: IProductInCart = {
      id: product.id,
      images: product.images,
      name: product.name,
      price: product.price,
      choosenSize: Number(size),
      descritpion: product.descritpion,
    }
    const AddedProduct = await StoreService.addProductInFavorite("fullstackdevpitt", addedproduct)
    console.log(AddedProduct.data)
    window.location.reload()
  }

  // Функция удаления товара из корзины
  const onDelete = async (productId: string) => {
    try {
      const deletedProduct = await StoreService.deleteProductFromFavorite(store.username, productId)
      console.log(deletedProduct.data);
    } catch (error) {
      alert("Неизвестная ошибка, попробуйте еще раз")
    } finally {
      setCurrentItem(false)
      window.location.reload()
    }
  }

  useEffect(() => {
    const itemId = location.pathname.split('/item/') 
    const item = user?.favoriteCart.filter(elem => elem.id === itemId[1])
    if (user?.favoriteCart.length !== 0) {
      if (item) {
        if (item?.length > 0) {
          setCurrentItem(true)
        }
      } else if (item === undefined || null) {
        setCurrentItem(false)
      }
    }
  }, [location, user])

  // Получаем пользователя 
  useEffect(() => {
    if (!user) {
      const getUser = async () => {
        const User = await UserSrvice.getUser(store.username)
        return setUser(User.data)
      }
      getUser()
    }
  }, [store, user])

  // Получаем данные товара (бэкенд запрос)
  useEffect(() => {
    const itemId = location.pathname.split('/item/') 
    const item = ItemArray.find(item => item.id === itemId[1])
    setProduct(item)
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
          text: `В корзину`,
          color: "#000",
          text_color: "#e5fd60"
      })
    }
  }, [size])

  // Функция при нажатии 
  useEffect(() => {
    tg.onEvent('mainButtonClicked', async () => {
      const addedproduct: IProductInCart = {
        id: product.id,
        images: product.images,
        name: product.name,
        price: product.price,
        choosenSize: Number(size),
        descritpion: product.descritpion,
      }
      const AddedProduct = await StoreService.addProductInCart("fullstackdevpitt", addedproduct)
      console.log(AddedProduct.data)
      await navigate('/busket')
    })
    return () => {
      tg.offEvent('mainButtonClicked', async () => {
        const addedproduct: IProductInCart = {
          id: product.id,
          images: product.images,
          name: product.name,
          price: product.price,
          choosenSize: Number(size),
          descritpion: product.descritpion,
        }
        const AddedProduct = await StoreService.addProductInCart("fullstackdevpitt", addedproduct)
        console.log(AddedProduct.data)
        await navigate('/busket')
      })
    }
  }, [product, navigate, size])

  return (
    <>
    <div className="itempage">
      <div className="slider">
        <Swiper navigation={true} slidesPerView={1} onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}>
          {product?.images.map((image) => (<SwiperSlide className='SwiperSlide'><img src={image} alt="img" className='sliderimage'></img></SwiperSlide>))}
        </Swiper>
      </div>
      <div className="itemmenu">
        <div className="dots">
          <div className="dot dot0"></div>
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
        <div className="itemname">
          <span>{product?.name}</span>
          <span className='addtofavorite' onClick={addProductInFavorite}>
            <svg width="25" height="25" fill={currentItem ? "#000" : "none"} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2e5fd60/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </span>
        </div>
        <div className="itemprice">${product?.price}</div>
        <div className="choosesize_vidget">{size ? (<>Выбран: <span>{size}</span></>) : <>Выбранный размер</>}</div>
        <div className="sizes">
          <Swiper slidesPerView={6} navigation={true}>
            {product?.sizes.map(elem => ( <SwiperSlide><label><input onChange={(e) => setSize(e.target.value)} type="radio" value={elem.size} name="radio"/><span data-span="span">{elem.size}</span></label></SwiperSlide> ))}
          </Swiper>
        </div>
        <div className="itemdesc">{product?.descritpion}</div>        
      </div>
    </div>
    </>
  );
}

export default observer(ItemPage);