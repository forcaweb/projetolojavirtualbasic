import * as React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { imagens } from '../../assets/img/imagens';

export function Compras() {
  return (
    <div className='perfilContainer'>
      <div className='title'>
        <h3>Minhas Compras</h3>
      </div>
      <div className='infoClient'>
        <div className='campText edit'>
          <a href='/detalhes/pedidos/1' title='Detalhes'>
            <CgDetailsMore />
          </a>
        </div>
        <img src={imagens.logo} alt='' />
        <div className='campText'>
          <h3>Pedido:</h3>
          <p>#474789</p>
        </div>
        <div className='campText'>
          <h3>Data da compra:</h3>
          <p>01/01/1900</p>
        </div>
        <div className='campText'>
          <h3>Data da entrega:</h3>
          <p>01/01/1900</p>
        </div>
        <div className='campText'>
          <h3>Status:</h3>
          <p>Entregue</p>
        </div>
        <div className='campTextMobile'>
          <a href='/detalhes/pedidos/1' title='Detalhes'>
            <CgDetailsMore /> Detalhes
          </a>
        </div>
      </div>
    </div>
  );
}
