import { BrowserRouter as Router } from 'react-router-dom';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Store from './store/store'
import App from './App';

interface State { store: Store }
export const store = new Store()
export const Context = createContext<State>({ store })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
        <Router>
          <Context.Provider value={{ store }}>
            <App/>
          </Context.Provider>
        </Router>
  </React.StrictMode>
);
