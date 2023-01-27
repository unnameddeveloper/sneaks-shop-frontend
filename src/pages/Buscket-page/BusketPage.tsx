import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
// import CartItem from '../../components/CartItem';
import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { IProductInCart, IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';
import { ItemArray } from '../../assets/productArr';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()
  const [totalShopCartPrice, setTotalShopCartPrice] = useState(0)
  const [loadingModal, setLoadingModal] = useState<boolean>(false)
  const [addedItems, setAddedItem] = useState([])

  // Считаем итоговую цену добавленных товаров
  const getTotalPrice = (products = []) => {
    return products.reduce((acc, item) => {
        return acc += item.price
    }, 0)
  }

  // Функция добавления товара в корзину
  const onAdd = (product: IProductInCart) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []
    if (alreadyAdded) {
        newItems = addedItems.filter(item => item.id !== product.id)
    } else {
        newItems = [...addedItems, product]
    }

    setAddedItem(newItems)
    setTotalShopCartPrice(getTotalPrice(newItems))
  }

  useEffect(() => {
    if (store.isLoading === true) {
      setLoadingModal(true)
      store.setFooterMenu(false)
      tg.MainButton.hide()
    } else if (user?.shoppingCart.length > 0) {
      tg.MainButton.show()
      tg.MainButton.setParams({
        color: "#1c1b1d",
        text_color: "#e5fd60",
        text: "Оплатить"
      })
    } else if (user?.shoppingCart.length < 0) {
      tg.MainButton.hide()
    }
  }, [store, user])

  // Функция при нажатии 
  useEffect(() => {
    tg.onEvent('mainButtonClicked', async () => {
      setLoadingModal(true)
      const invoiceLink = await store.createInvoiceLink()
      console.log("invoiceLink: " + invoiceLink);
      await tg.openInvoice(invoiceLink, async () => {})
    })
    return () => {
      tg.offEvent('mainButtonClicked', async () => {
        setLoadingModal(true)
        const invoiceLink = await store.createInvoiceLink()
        console.log("invoiceLink: " + invoiceLink);
        await tg.openInvoice(invoiceLink, async () => {})
      })
    }
  }, [store])

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
    if (window.pageYOffset >= -50) store.setFooterMenu(true)
  }, [store])

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
          <CartItem product={ItemArray[0]} onAdd={onAdd}></CartItem>
          <CartItem product={ItemArray[1]} onAdd={onAdd}></CartItem>
          <CartItem product={ItemArray[2]} onAdd={onAdd}></CartItem>
          {/* {!user?.shoppingCart ? <div><div>В корзине пусто</div></div> : (<>{user?.shoppingCart.map((product) => <CartItem product={product}></CartItem>)}</>)} */}
        </div>
      </div>
      <div className="invoicescore">
        {addedItems.length > 0 ? <div className="extrainfo">Доставка: <span data-type="invoice">+ $19</span></div> : <div className="extrainfo">Доставка: <span data-type="invoice">+ $0</span></div>}
        <div className="extrainfo">Итого: <span data-type="invoice">${totalShopCartPrice}</span></div>
      </div>
    </>
  );
}

export default observer(BusketPage);