import BusketPage from './pages/Buscket-page/BusketPage';
import ItemPage from './pages/Item-page/ItemPage';
import HomePage from './pages/Home-page/HomePage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { tg } from './hooks/useTelegram';
import './styles/App.css';

function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <div className="container">
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path={'/busket'} element={<BusketPage/>}/>
        <Route path={'/item/:id'} element={<ItemPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
