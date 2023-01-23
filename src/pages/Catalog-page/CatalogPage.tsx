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
            <div className="catalogh1">Каталог</div>
            <div className="filtermenu">
                <div className="sortby">Сортировать: <span>по названию</span></div>
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