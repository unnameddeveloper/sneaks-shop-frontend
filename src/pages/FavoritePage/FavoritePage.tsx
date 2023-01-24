import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
import CartItem from '../../components/CartItem';
import { observer } from 'mobx-react-lite';
import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState<IUser>()

  return (
    <>
      <div className="favoritepage">
        <div className="header">
          <div>Избранное</div>
          <svg width="20" height="20" fill="#4680ff" stroke="#4680ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div className="favoriteItems">
          {user?.favoriteCart.map(elem => <CartItem product={elem}/>)}
          {!user?.favoriteCart ? (
            <>
            <div className='empty'>
              <div>Нету избранных</div>
              <svg width="30" height="30" fill="none" stroke="#80a8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            </>
          ) : 
          (<>{user?.favoriteCart.map(elem => <CartItem product={elem}/>)}</>)}
        </div>
      </div>
    </>
  );
}

export default observer(BusketPage);