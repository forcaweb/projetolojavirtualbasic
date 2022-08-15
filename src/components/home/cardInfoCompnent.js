import * as React from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { ImPagebreak } from 'react-icons/im';
import { imagens } from '../../assets/img/imagens';

export function CardInfoComponent() {
  return (
    <div className='cardInfoContainer'>
      <div className='campPag'>
        <AiFillCreditCard />
        <span className='textInfo'>
          <h3>Pagamento com Cartão</h3>
          <p>Aceitamos Cartão de Crédito e Débito.</p>
        </span>
      </div>

      <div className='campPag'>
        <ImPagebreak />
        <span className='textInfo'>
          <h3>Pagamento com Boleto</h3>
          <p>Aceitamos Boleto.</p>
        </span>
      </div>

      <div className='campPag pix'>
        <span className='textInfo'>
          <img src={imagens.pix} alt='' />
          <p>Aceitamos Pix.</p>
        </span>
      </div>
    </div>
  );
}
