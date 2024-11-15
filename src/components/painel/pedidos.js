import * as React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { imagens } from '../../assets/img/imagens';

export function Pedidos() {
  return (
    <div className='perfilContainer'>
      <div className='title'>
        <h3>Pedidos</h3>
      </div>
      <div className='infoClient'>
        <div className='campText edit'>
          <a href='/details/orders/1' title='Detalhes'>
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
          <h3>Código de rastreio:</h3>
          <p>BR12345678LM</p>
        </div>
        <div className='campText'>
          <h3>Status:</h3>
          <p>A Caminho</p>
        </div>
        <div className='campTextMobile'>
          <a href='/details/orders/1' title='Detalhes'>
            <CgDetailsMore /> Detalhes
          </a>
        </div>
      </div>
    </div>
  );
}
