import { FC, useContext, useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { IUser } from '../../types/types';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';
import LoadingComponent from '../../components/Loading';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()
  const [loadingModal, setLoadingModal] = useState<boolean>()

  // Получаем информацию о добавленных товарах в корзину
  useEffect(() => {
  }, [])

  useEffect(() => {
    if (store.isLoading === true) {
      setLoadingModal(true)
      return tg.MainButton.hide()
    }
    
    if (loadingModal === false) {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: "Оплатить"
      })
    } 
  }, [store])

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
        return await tg.openInvoice(invoiceLink, async () => {})
      })
    }
  }, [store])

  // Слушатель события
  useEffect(() => {
    window.Telegram.WebApp.onEvent('invoiceClosed', (res: any) => {
      setLoadingModal(false)
      alert(`Status: ${res.status}`)
      return console.log(res);
    })
    return () => {
      window.Telegram.WebApp.offEvent('invoiceClosed', (res: any) => {
        setLoadingModal(false)
        alert(`Status: ${res.status}`)
        return console.log(res);
      })
    }
  }, [])

  return (
    <>
      <LoadingComponent active={loadingModal} setActive={setLoadingModal}/>
      <div className="busketpage" style={loadingModal ? { filter: "blur(4px)" } : { filter: "blur(0px)" }}>
        <div className="header"><Link to="/" className="backbutton"><div className="arrow"></div></Link><span>My Cart</span></div>
        <div className="shoppingcart_items">
          <div className="cartitem">
            <div className="cartitem_image"></div>
            <div className="item_info">
              <div className="cartitem_name item_info_field">Product name</div>
              <div className="cartitem_choosensize item_info_field">Choosen size</div>
              <div className="cartitem_price item_info_field">Product price</div>
            </div>
            <div className="deleteitem_field"><div className="deleteitem_button"></div></div>
            {/* <span>Delete</span> */}
          </div>
          <div className="cartitem">
            <div className="cartitem_image"></div>
            <div className="item_info">
              <div className="cartitem_name item_info_field">Product name</div>
              <div className="cartitem_choosensize item_info_field">Choosen size</div>
              <div className="cartitem_price item_info_field">Product price</div>
            </div>
            <div className="deleteitem_field"><div className="deleteitem_button"></div></div>
            {/* <span>Delete</span> */}
          </div>
          <div className="cartitem">
            <div className="cartitem_image"></div>
            <div className="item_info">
              <div className="cartitem_name item_info_field">Product name</div>
              <div className="cartitem_choosensize item_info_field">Choosen size</div>
              <div className="cartitem_price item_info_field">Product price</div>
            </div>
            <div className="deleteitem_field"><div className="deleteitem_button"></div></div>
            {/* <span>Delete</span> */}
          </div>
          <div className="cartitem">
            <div className="cartitem_image"></div>
            <div className="item_info">
              <div className="cartitem_name item_info_field">Product name</div>
              <div className="cartitem_choosensize item_info_field">Choosen size</div>
              <div className="cartitem_price item_info_field">Product price</div>
            </div>
            <div className="deleteitem_field"><div className="deleteitem_button"></div></div>
            {/* <span>Delete</span> */}
          </div>
          {/* {user.shoppingCart.map((product) => <CartItem product={product}></CartItem>)} */}
        </div>
        <div className="invoicescore">
          <div className="extrainfo">Доставка: <span data-type="invoice">+ $29</span></div>
          <div className="extrainfo">Итого: <span data-type="invoice">$339</span></div>
        </div>
      </div>
    </>
  );
}

export default observer(BusketPage);