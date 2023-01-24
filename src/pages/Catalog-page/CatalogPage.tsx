import { FC, useContext, useEffect, useState } from 'react';
import FilterModal from '../../components/FilterModal';
import { ItemArray } from '../../assets/productArr'
import Footer from '../../components/Footer';
import { IProduct } from '../../types/types';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'
import { tg } from '../../hooks/useTelegram';


const CatalogPage: FC = () => {
  const { store } = useContext(Context)
  const [products, setProducts] = useState<IProduct[]>(ItemArray)
  const [filterModal, setFiltermModal] = useState<boolean>(false)

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    tg?.MainButton?.hide()
  }, [])

  return (
    <>
    <FilterModal active={filterModal} setActive={setFiltermModal}/>
    <div className={filterModal ? "catalogpage catalogpagehide" : "catalogpage"}>
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
            { products.map(item => (<Item product={item}/>)) }
            <div className="scrollup" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})}>Вверх</div>
        </div>
        <div className="filter_menu" onClick={() => setFiltermModal(true)}>Больше фильтров</div>
    </div>
    <Footer/>
    </>
  );
}

export default observer(CatalogPage);