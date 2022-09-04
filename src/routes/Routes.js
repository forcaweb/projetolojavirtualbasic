import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PageHome,
  PageCategory,
  PageProduto,
  PageLogin,
  PageRegister,
  PagePainel,
  PageCart,
  PageFavorite,
  PageOrders,
  PageEditPerfil,
  PageEditAdress,
  PageAddAdress,
  PageDetailsProds,
} from './MyRoutes';
import { Page404 } from '../views/Page404/Page404';
import { LoggedSecurity, LoginSecurity } from './authRoutes';

export function Rotas() {
  return (
    <Routes>
      <Route exact path='/' element={<PageHome />} />
      <Route exact path='/category/:q' element={<PageCategory />} />
      <Route exact path='/product/:q' element={<PageProduto />} />
      <Route exact path='/register' element={<PageRegister />} />
      <Route exact path='/cart' element={<PageCart />} />
      <Route exact path='/favorites' element={<PageFavorite />} />
      <Route exact path='/detailsproducts/:t' element={<PageDetailsProds />} />
      <Route element={<LoggedSecurity />}>
        <Route path='/painel' element={<PagePainel />} />
        <Route path='/painel/:p' element={<PagePainel />} />
        <Route path='/details/:p/:q' element={<PageOrders />} />
        <Route path='/edit/perfil/:q' element={<PageEditPerfil />} />
        <Route path='/edit/adress/:q' element={<PageEditAdress />} />
        <Route path='/edit/addadress' element={<PageAddAdress />} />
      </Route>
      <Route element={<LoginSecurity />}>
        <Route path='/login' element={<PageLogin />} />
      </Route>
      <Route path='*' element={<Page404 />} />
      <Route />
    </Routes>
  );
}
