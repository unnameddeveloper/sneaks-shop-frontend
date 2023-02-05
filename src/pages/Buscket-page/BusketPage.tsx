import { FC, useContext, useEffect, useState } from 'react';
import { IProductInCart, IUser } from '../../types/types';
import LoadingComponent from '../../components/Loading';
import UserSrvice from '../../services/user-service';
import CartItem from '../../components/CartItem';
import { IGetUserData } from '../../store/store';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import './styles/style.css';
import StoreService from '../../services/store-service';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()
  const [addedItems, setAddedItem] = useState([])
  const [stylez, setStylez] = useState("invoicescore")
  const [totalShopCartPrice, setTotalShopCartPrice] = useState(0)
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Считаем итоговую цену добавленных товаров
  const getTotalPrice = (products = []) => {
    return products.reduce((acc, item) => {
        return acc += item.price
    }, 0)
  }
  // Функция добавления товара в заказ
  const onAdd = (product: IProductInCart) => {
    const alreadyAdded = addedItems.find(item => item === product)
    let newItems = []
    if (alreadyAdded) {
        newItems = addedItems.filter(item => item !== product)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItem(newItems)
    setTotalShopCartPrice(getTotalPrice(newItems))
  }
  // Функция удаления товара из корзины
  const onDelete = async (productId: string, choosenSize: string) => {
    try {
      const deletedProduct = await StoreService.deleteProductFromCart(store.username, productId, choosenSize)
      console.log(deletedProduct.data);
    } catch (error) {
      alert("Неизвестная ошибка, попробуйте еще раз")
    } finally {
      const User = await UserSrvice.getUser(store.username)
      setStylez("invoicescore")
      return setUser(User.data)
    }
  }

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

  useEffect(() => {
    if (store.isLoading === true) {
      setLoadingModal(true)
    } 
  }, [store])

  // Функция при нажатии 
  useEffect(() => {
    // setLoadingModal(true)
    //   const invoiceLink = await store.createInvoiceLink(totalShopCartPrice)
    //   console.log("invoiceLink: " + invoiceLink);
    //   await tg.openInvoice(invoiceLink, async () => {})
  }, [store, totalShopCartPrice])

  // Слушатель события
  useEffect(() => {
    tg.onEvent('invoiceClosed', (res: any) => {
      setLoadingModal(false)
      console.log(res);
      alert(`Статус: ${res.status}`)
    })
    return () => {
      tg.offEvent('invoiceClosed', (res: any) => {
        setLoadingModal(false)
        console.log(res);
        alert(`Статус: ${res.status}`)
      })
    }
  }, [])

  useEffect(() => {
    if (user?.shoppingCart.length > 0) {
      setStylez("invoicescore invoicescoreShow")
    }
  }, [user])
  

  return (
    <>
      <LoadingComponent active={loadingModal} setActive={setLoadingModal}/>
      <div className="busketpage" style={loadingModal ? { filter: "blur(4px)" } : { filter: "blur(0px)" }}>
        <div className="header">
          <span>Корзина</span>
          <svg width="23" height="23" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div className="shoppingcart_items">
          {/* {user?.shoppingCart.length === 0 ? <div><div>В корзине пусто</div></div> : (<>{user?.shoppingCart.map((product) => <CartItem onDelete={onDelete} onAdd={onAdd} product={product}></CartItem>)}</>)} */}
          {user?.shoppingCart.length === 0 ? 
          <>
            <svg width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path>
              <path d="m16.5 12.5-2-1"></path>
              <path d="m9 11.5-2 1"></path>
              <path d="M15.5 17.5s-1-2-3.5-2-3.5 2-3.5 2"></path>
            </svg>
            <div className='empty'>В корзине пусто</div>
          </> : 
          <>
            {user?.shoppingCart.map(product => <CartItem onDelete={onDelete} onAdd={onAdd} product={product}></CartItem>)}
          </>}
        </div>
      </div>
      <div className={stylez}>
        {addedItems.length > 0 ? <div className="extrainfo">Доставка: <span data-type="invoice">+ $19</span></div> : <div className="extrainfo">Доставка: <span data-type="invoice">+ $0</span></div>}
        <div className="extrainfo">Итого: <span data-type="invoice">${totalShopCartPrice}</span></div>
      </div>
    </>
  );
}

export default observer(BusketPage);