import { FC, useContext, useEffect, useState } from 'react';
import LoadingComponent from '../../components/Loading';
// import CartItem from '../../components/CartItem';
import { tg } from '../../hooks/useTelegram';
import { observer } from 'mobx-react-lite';
// import { IUser } from '../../types/types';
import { Context } from '../../index';
import './styles/style.css';

const BusketPage: FC = () => {
  const { store } = useContext(Context)
  // const [user, setUser] = useState<IUser>()

  return (
    <>
      <div className="favoritepage">Favorite</div>
    </>
  );
}

export default observer(BusketPage);