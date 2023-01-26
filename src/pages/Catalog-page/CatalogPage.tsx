import { FC, useContext, useEffect, useState } from 'react';
import FilterModal from '../../components/FilterModal';
import { ItemArray } from '../../assets/productArr'
import { tg } from '../../hooks/useTelegram';
import Footer from '../../components/Footer';
import { IProduct } from '../../types/types';
import { observer } from 'mobx-react-lite';
import Item from '../../components/Item';
import { Context } from '../../index';
import './styles/style.css';
import AOS from 'aos'


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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 0) {
        store.setFooterMenu(true)
      } 
    })
  }, [store])

  return (
    <>
    <FilterModal active={filterModal} setActive={setFiltermModal}/>
    <div className={filterModal ? "catalogpage catalogpagehide" : "catalogpage"}>
        <div className="cataloglist">
            <div className="catalogfilter">
              <div className="catalogh1">
                <svg width="22" height="22" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6h13"></path>
                  <path d="M8 12h13"></path>
                  <path d="M8 18h13"></path>
                  <path d="M3 6h.01"></path>
                  <path d="M3 12h.01"></path>
                  <path d="M3 18h.01"></path>
              </svg>
              <div>Каталог</div>
              <div className="profileimage"></div>
              </div>
              <div className="welcome">Поиск <span>🔍</span></div>
              <div className="inputtitle">Найдите, то что всегда хотели</div>
              <div className="inputfilter">
                <svg width="23" height="23" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" id="filterinput" />
                <svg onClick={() => setFiltermModal(true)} width="25" height="25" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M4 6h8"></path>
                  <path d="M16 6h4"></path>
                  <path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M4 12h2"></path>
                  <path d="M10 12h10"></path>
                  <path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M4 18h11"></path>
                  <path d="M19 18h1"></path>
                </svg>
              </div>
            </div>
            <div className="filtermenu">
                <div className="sortby"><span>Сортировать:</span><span>По возрастанию цены</span></div>
            </div>
            { products.map(item => (<Item product={item}/>)) }
            <div className="scrollup" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})}>
              <svg width="25" height="25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5"></path>
                <path d="m5 12 7-7 7 7"></path>
              </svg>
            </div>
        </div>
    </div>
    </>
  );
}

export default observer(CatalogPage);