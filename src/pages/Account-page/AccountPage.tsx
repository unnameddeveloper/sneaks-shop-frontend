import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';
import FooterMenu from '../../components/FooterMenu/footerMenu';


const AccountPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { store } = useContext(Context)

  useEffect(() => {
    if (loading) {
      store.setFooterMenu(false)
    }
  }, [loading, store])

  return (
    <>
      <LoadingComponent active={loading} setActive={setLoading}/>
      <div className="accountpage">
        <div className="header">
          <img src={store.userphoto} alt="userphoto" className='userphoto'/>
          <div className="header_username">@username{store.username}</div>
        </div>
        <div className="account_menu">
            <h1 className='menu_name'>Аккаунт</h1>
            <div className="account_info">
              <div className="account_info_phone account_menu_filed">Телефон: </div>
              <div className="account_info_mail account_menu_filed">Почта: </div>
            </div>
            <h1 className='menu_name'>Покупки</h1>
            <div className="account_menu_extra">
              <div className="account_menu_orders account_menu_filed">Заказы</div>
              <Link to="/busket" className="account_menu_basket account_menu_filed">Корзина</Link>
              <Link to="/favorite" className="account_menu_basket account_menu_filed">Избранное</Link>
              <div className="account_menu_basket account_menu_filed">История покупок</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default observer(AccountPage);