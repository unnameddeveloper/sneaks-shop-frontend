import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
// import CartItem from '../../components/CartItem';
import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Получаем информацию о добавленных товарах в корзину
  // useEffect(() => {
  // }, [])

  useEffect(() => {
    if (store.isLoading === true) {
      setLoadingModal(true)
      tg.MainButton.hide()
    } else if (user?.shoppingCart.length > 0) {
      tg.MainButton.show()
      tg.MainButton.setParams({
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
      alert(`Status: ${res.status}`)
    })
    return () => {
      tg.offEvent('invoiceClosed', (res: any) => {
        setLoadingModal(false)
        console.log(res);
        alert(`Status: ${res.status}`)
      })
    }
  }, [])

  return (
    <>
      <LoadingComponent active={loadingModal} setActive={setLoadingModal}/>
      <div className="busketpage" style={loadingModal ? { filter: "blur(4px)" } : { filter: "blur(0px)" }}>
        <div className="header">
          <span>My Cart</span>
          <svg width="23" height="23" fill="#fff" stroke="#4680ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div className="shoppingcart_items">
          {!user?.shoppingCart ? <div><div>В корзине пусто</div></div> : (<>{user?.shoppingCart.map((product) => <CartItem product={product}></CartItem>)}</>)}
        </div>
        <div className="line"></div>
        <div className="invoicescore">
          <div className="extrainfo">Доставка: <span data-type="invoice">+ $29</span></div>
          <div className="extrainfo">Итого: <span data-type="invoice">$339</span></div>
        </div>
      </div>
    </>
  );
}

export default observer(BusketPage);