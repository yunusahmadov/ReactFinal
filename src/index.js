import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css'
import './styles/responsive.css'
import { Provider } from 'react-redux';
import {setupStore} from './reduxx/Store'
import { BrowserRouter } from 'react-router-dom';

const store =setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>


);

