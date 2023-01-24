import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import './styles/style.css';
import { IUser } from '../../types/types';


const AccountPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [mail, setMail] = useState<string>()
  const [number, setNumber] = useState<string>()
  const [user, setUser] = useState<IUser>()
  const { store } = useContext(Context)

  useEffect(() => {
    if (loading) {
      store.setFooterMenu(false)
    }
  }, [loading, store])

  // Для редактирования данных
  useEffect(() => {
  }, [])

  const SendNewData = async () => {
    // Отправляем на бэкенд изменения
    const newData = {number, mail}
    // const SendNewData = store.sendNewData(newData)
    alert(`Данные успешно изменены`)
  }

  return (
    <>
      <LoadingComponent active={loading} setActive={setLoading}/>
      <div className="accountpage">
        <div className="header">
          <img src={user?.image} alt="userphoto" className='userphoto'/>
          <div className="header_username">@{store.username}</div>
        </div>
        <div className="account_menu">
            <div className='menu_name'>
              <span>Аккаунт</span>
              {edit ? (
              <span onClick={async () => {setEdit(false); await SendNewData()}}><svg width="24" height="24" fill="#80a8ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.598 2.874.178-.178a1.45 1.45 0 0 1 2.049 2.05l-.179.177a1.8 1.8 0 0 1-.07 2.47L8.224 19.746a.6.6 0 0 1-.28.157l-4.8 1.2a.599.599 0 0 1-.727-.727l1.2-4.8a.6.6 0 0 1 .157-.278l11.57-11.57a.6.6 0 0 0-.77.067l-3.95 3.951a.6.6 0 0 1-.85-.85l3.953-3.95a1.8 1.8 0 0 1 2.472-.07 1.8 1.8 0 0 1 2.398 0Z"></path></svg>Готово</span>
              ) : (
              <span onClick={() => setEdit(true)}><svg width="24" height="24" fill="#80a8ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.598 2.874.178-.178a1.45 1.45 0 0 1 2.049 2.05l-.179.177a1.8 1.8 0 0 1-.07 2.47L8.224 19.746a.6.6 0 0 1-.28.157l-4.8 1.2a.599.599 0 0 1-.727-.727l1.2-4.8a.6.6 0 0 1 .157-.278l11.57-11.57a.6.6 0 0 0-.77.067l-3.95 3.951a.6.6 0 0 1-.85-.85l3.953-3.95a1.8 1.8 0 0 1 2.472-.07 1.8 1.8 0 0 1 2.398 0Z"></path></svg>Изм.</span>
              )}
            </div>
            <div className="account_info">
              <div className="account_info_phone account_menu_filed">
                <span>Телефон:</span>
                {edit ? <input type="text" className='addbutn_input' placeholder='Введите телефон' autoFocus value={number} onChange={(e) => setNumber(e.target.value)}></input> : <span>{user?.phoneNumber ? <div>{user?.phoneNumber}</div> : <div className='addbutn'>Не добавлен</div>}</span>}
              </div>
              <div className="account_info_mail account_menu_filed">
                <span>Почта:</span>
                {edit ? <input type='email' className='addbutn_input' placeholder='Введите почту' value={mail} onChange={(e) => setMail(e.target.value)}></input> : <span>{user?.email ? <div>{user?.email}</div> : <div className='addbutn'>Не добавлен</div>}</span>}
              </div>
            </div>
            <h1 className='menu_name'>Покупки</h1>
            <div className="account_menu_extra">
              <Link to="/orders" className="account_menu_orders account_menu_filed"><span>Заказы</span><span>2</span></Link>
              <Link to="/busket" className="account_menu_basket account_menu_filed">Корзина</Link>
              <Link to="/favorite" className="account_menu_basket account_menu_filed">Избранное</Link>
              <Link to="#" className="account_menu_basket account_menu_filed">История покупок</Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default observer(AccountPage);