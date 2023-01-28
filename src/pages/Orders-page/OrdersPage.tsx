import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
import UserSrvice from '../../services/user-service';
import { ItemArray } from '../../assets/productArr';
import OrderItem from '../../components/OrderItem';
import { observer } from 'mobx-react-lite';
import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';


const OrdersPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>()
  const { store } = useContext(Context)

  // Получаем пользователя 
  useEffect(() => {
    if (!user) {
      const getUser = async () => {
        const User = await UserSrvice.getUser("fullstackdevpitt")
        return setUser(User.data)
      }
      getUser()
    }
  }, [store, user])

  useEffect(() => {
    if (loading) {
      store.setFooterMenu(false)
    }
  }, [loading, store])

  return (
    <>
      <LoadingComponent active={loading} setActive={setLoading}/>
      <div className="orderspage">
        <div className="header">
          <div>Мои заказы</div>
          <svg width="30" height="30" fill="#1c1b1d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.503 3.503 0 1 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52L19.15 8ZM15 9h2.43l1.8 3H15V9ZM6.5 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
          </svg>
        </div>
        <div className="orders_items">
          <OrderItem orderprice={299} choosensize={37} orderstatus={"Собирается"} shipdate={"27 января"} date={"Заказ от 10 января 2023"} product={ItemArray[0]}></OrderItem>
          <OrderItem orderprice={699} choosensize={43} orderstatus={"Передан курьеру"} shipdate={"6 февраля"} date={"Заказ от 3 января 2023"} product={ItemArray[1]}></OrderItem>
          {/* {!user?.orders ? <div><div>Нету заказов</div></div> : (<>{user?.orders.map((order) => <OrderItem product={order}></OrderItem>)}</>)} */}
        </div>
      </div>
    </>
  );
}

export default observer(OrdersPage);