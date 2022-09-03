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
      <Route exact path='/categoria/:q' element={<PageCategory />} />
      <Route exact path='/produto/:q' element={<PageProduto />} />
      <Route exact path='/cadastro' element={<PageRegister />} />
      <Route exact path='/carrinhodecompra' element={<PageCart />} />
      <Route exact path='/produtosfavoritos' element={<PageFavorite />} />
      <Route
        exact
        path='/detalhesdoproduto/:t'
        element={<PageDetailsProds />}
      />
      <Route element={<LoggedSecurity />}>
        <Route path='/painel' element={<PagePainel />} />
        <Route path='/painel/:p' element={<PagePainel />} />
        <Route path='/detalhes/:p/:q' element={<PageOrders />} />
        <Route path='/editar/perfil/:q' element={<PageEditPerfil />} />
        <Route path='/editar/enderecos/:q' element={<PageEditAdress />} />
        <Route path='/editar/adicionarendereco' element={<PageAddAdress />} />
      </Route>
      <Route element={<LoginSecurity />}>
        <Route path='/login' element={<PageLogin />} />
      </Route>
      <Route path='*' element={<Page404 />} />
      <Route />
    </Routes>
  );
}
