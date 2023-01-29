import { FC, useContext, useState, useEffect } from 'react';
import FavoriteItem from '../../components/FavoriteItem';
import StoreService from '../../services/store-service';
import UserSrvice from '../../services/user-service';
import { tg } from '../../hooks/useTelegram';
import { Vibration } from 'react-native-web'
import { observer } from 'mobx-react-lite';
import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()

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

  // Функция удаления товара из корзины
  const onDelete = async (productId: string) => {
    try {
      Vibration?.vibrate(1000)
      const deletedProduct = await StoreService.deleteProductFromFavorite(store.username, productId)
      console.log(deletedProduct.data);
    } catch (error) {
      alert("Неизвестная ошибка, попробуйте еще раз")
    } finally {
      window.location.reload()
    }
  }
  
  return (
    <>
      <div className="favoritepage">
        <div className="header">
          <div>Избранное</div>
          <svg width="20" height="20" fill="#1c1b1d" stroke="#1c1b1d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div className="favoriteItems">
          {user?.favoriteCart.length === 0 ? <div className='empty'><div>В избранных пусто</div></div> : (<>{user?.favoriteCart.map(elem => <FavoriteItem onDelete={onDelete} product={elem}/>)}</>)}
        </div>
      </div>
    </>
  );
}

export default observer(BusketPage);