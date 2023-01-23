import React, { FC, useContext, useEffect, useState } from 'react';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import FooterMenu from './components/FooterMenu/footerMenu';
import AccountPage from './pages/Account-page/AccountPage';
import BusketPage from './pages/Buscket-page/BusketPage';
import ItemPage from './pages/Item-page/ItemPage';
import HomePage from './pages/Home-page/HomePage';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { tg } from './hooks/useTelegram';
import { Context } from './index';
import './styles/App.css';

const App: FC = () => {
  const { store } = useContext(Context)
  const [footerMenu, setFooterMenu] = useState<boolean>(store.footerMenu)

  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/busket'} element={<BusketPage/>}/>
        <Route path={'/item/:id'} element={<ItemPage/>}/> 
        <Route path={'/account'} element={<AccountPage/>}/> 
        <Route path={'/favorite'} element={<FavoritePage/>}/> 
      </Routes>
      <FooterMenu active={footerMenu} setActive={setFooterMenu}/>
    </>
  );
}

export default observer(App);
