import React from 'react';
import { Home } from '../views/home';
import { Category } from '../views/category';
import { Produto } from '../views/produto';
import { Login } from '../views/login';
import { Register } from '../views/register';
import { PainelContainer } from '../views/painel';
import { Cart } from '../views/cart/cart';
import { Favorite } from '../views/favorite';
import { OrdersDetails } from '../views/ordersdetails';
import { EditPerfil } from '../views/editperfil';
import { EditAdress } from '../views/editadress';
import { AddAdress } from '../views/addadress';
import { DetailsProds } from '../views/detailsprods';

export function PageHome() {
  return <Home />;
}

export function PageCategory() {
  return <Category />;
}

export function PageProduto() {
  return <Produto />;
}

export function PageLogin() {
  return <Login />;
}

export function PageRegister() {
  return <Register />;
}

export function PagePainel() {
  return <PainelContainer />;
}

export function PageCart() {
  return <Cart />;
}

export function PageFavorite() {
  return <Favorite />;
}

export function PageOrders() {
  return <OrdersDetails />;
}

export function PageEditPerfil() {
  return <EditPerfil />;
}

export function PageEditAdress() {
  return <EditAdress />;
}

export function PageAddAdress() {
  return <AddAdress />;
}

export function PageDetailsProds() {
  return <DetailsProds />;
}
