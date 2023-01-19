import { BrowserRouter } from 'react-router-dom';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Store from './store/store'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface State { store: Store }
export const store = new Store()
export const Context = createContext<State>({ store })

root.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
