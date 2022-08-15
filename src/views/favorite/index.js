import * as React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { TbHandClick } from 'react-icons/tb';
import { FiTrash } from 'react-icons/fi';
import { imagens } from '../../assets/img/imagens';
import './favorite.css';

export function Favorite() {
  return (
    <div className='favoriteContainer'>
      <div className='tittle'>Favoritos</div>
      <div className='itens'>
        <div className='favoritesItens'>
          <div className='icons'>
            <AiFillHeart />
          </div>
          <div className='img'>
            <img src={imagens.logo} alt='' />
          </div>
          <div className='name'>
            <h4>Liquificador azul liquificador azul liquificador a zul</h4>
          </div>
          <div className='link'>
            <a href='/'>
              <TbHandClick /> Produto
            </a>
          </div>
          <div className='delete'>
            <FiTrash /> Apagar
          </div>
        </div>
      </div>
    </div>
  );
}
