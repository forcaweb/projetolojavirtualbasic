/* eslint-disable import/no-unresolved */
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import './globalstyle/globalstyle.css';
import Favicon from 'react-favicon';
import { Menu } from './views/header/header';
import App from './App';
import { Footer } from './views/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Favicon url={`http://${window.location.host}/imgs/icon.png`} />
      <Menu />
      <App />
      <Footer />
      <script src='https://sdk.mercadopago.com/js/v2' />
    </>
  </React.StrictMode>,
);
