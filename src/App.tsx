import BusketPage from './pages/Buscket-page/BusketPage';
import ItemPage from './pages/Item-page/ItemPage';
import HomePage from './pages/Home-page/HomePage';
import { Route, Routes } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { tg } from './hooks/useTelegram';
import './styles/App.css';

const App: FC = () => {

  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/busket'} element={<BusketPage/>}/>
        <Route path={'/item/:id'} element={<ItemPage/>}/> 
      </Routes>
    </>
  );
}

export default observer(App);
