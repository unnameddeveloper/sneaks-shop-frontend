import { useContext, useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { IUser } from '../../types/types';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()

  // Получаем информацию о добавленных товарах в корзину
  useEffect(() => {
    const getUser = async () => {
      // const User = await store.getUser
      // setUser(User)
    }
    getUser()
  }, [store])

  useEffect(() => {
    if (true) {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: "Оплатить $339"
      })
    }
  }, [user])

  // Функция при нажатии 
  useEffect(() => {
    tg.onEvent('mainButtonClicked', async () => {
      const invoiceLink = await store.createInvoiceLink()
      console.log("invoiceLink: " + invoiceLink);
      await tg.openInvoice(invoiceLink, async () => {})
    })
    return () => {
        tg.offEvent('mainButtonClicked', async () => {
          const invoiceLink = await store.createInvoiceLink()
          await tg.openInvoice(invoiceLink, async () => {})
        })
    }
  }, [store])

  // Слушатель события
  useEffect(() => {
    window.Telegram.WebApp.onEvent('invoiceClosed', (res: any) => {
      console.log(typeof res.status);
      console.log(res);
      return alert(`Status: ${res.status}`)
    })
    return () => {
      window.Telegram.WebApp.offEvent('invoiceClosed', (res: any) => {
      })
    }
  })

  return (
    <>
      <div className="busketpage">
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

export default BusketPage;