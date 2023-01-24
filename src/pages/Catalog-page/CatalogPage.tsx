import { FC, useContext, useEffect } from 'react';
import ItemArray from '../../assets/productArr'
import Footer from '../../components/Footer';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'


const CatalogPage: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
    <div className="catalogpage">
        <div className="cataloglist">
            <div className="catalogh1">
              <div>Каталог</div>
              <svg width="30" height="30" fill="none" stroke="#4680ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6h13"></path>
                <path d="M8 12h13"></path>
                <path d="M8 18h13"></path>
                <path d="M3 6h.01"></path>
                <path d="M3 12h.01"></path>
                <path d="M3 18h.01"></path>
            </svg>
            </div>
            <div className="filtermenu">
                <div className="sortby"><span>Сортировать:</span><span>По возрастанию цены</span></div>
            </div>
            { ItemArray.map(item => (<Item product={item}/>)) }
            <div className="scrollup" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})}>Вверх</div>
        </div>
        <div className="filter_menu">Больше фильтров</div>
    </div>
    <Footer/>
    </>
  );
}

export default observer(CatalogPage);