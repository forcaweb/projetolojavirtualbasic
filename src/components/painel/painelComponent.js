/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Perfil } from './perfil';
import { Pedidos } from './pedidos';
import { Compras } from './compras';

export function PainelComponents() {
  const routesPages = () => {
    const { p } = useParams();
    if (p === 'perfil') return <Perfil />;
    if (p === 'orders') return <Pedidos />;
    if (p === 'buying') return <Compras />;
    return <Perfil />;
  };
  return routesPages();
}
