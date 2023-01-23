import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
// import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
// import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';
import CartItem from '../../components/CartItem';
import { IUser } from '../../types/types';

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
        <div className="header"><span>My Cart</span></div>
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