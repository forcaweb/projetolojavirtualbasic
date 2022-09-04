/* eslint-disable no-plusplus */
import * as React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { CgMenuGridR, CgShoppingBag } from 'react-icons/cg';
import { GiShoppingBag } from 'react-icons/gi';
import { TbShoppingCart } from 'react-icons/tb';
import { BiLogOutCircle } from 'react-icons/bi';
// import { AiOutlineClose } from 'react-icons/ai';
import { PainelComponents } from './painelComponent';

export function Painel() {
  function menuShowandHide(e) {
    e.preventDefault();
    const span = document.querySelectorAll('.options a span');
    const menu = document.querySelector('.menuPainel');
    menu.classList.toggle('expandMenu');
    for (let i = 0; i < span.length; i++) {
      span[i].classList.toggle('showAndHideText');
    }
  }

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('ID');
    window.location.href = '/login';
  }
  return (
    <div className='painelContainer'>
      <div className='menuPainel'>
        <div className='options'>
          <a onClick={menuShowandHide} href='/'>
            <CgMenuGridR /> <span>Menu</span>
          </a>
          <a href='/painel/perfil'>
            <FaUserEdit /> <span>Perfil</span>
          </a>
          <a href='/painel/orders'>
            <CgShoppingBag /> <span>Meus Pedidos</span>
          </a>
          <a href='/cart'>
            <TbShoppingCart /> <span>Carrinho de compra</span>
          </a>
          <a href='/painel/buying'>
            <GiShoppingBag /> <span>Compras</span>
          </a>
          <a onClick={logout} href='/'>
            <BiLogOutCircle /> <span>Sair</span>
          </a>
        </div>
      </div>

      {/* Paginas de buscas */}
      <div className='pagesPainel'>
        <PainelComponents />
      </div>
    </div>
  );
}
