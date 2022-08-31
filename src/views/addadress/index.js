import * as React from 'react';
import './addadress.css';

export function AddAdress() {
  return (
    <div className='editPerfilContainer'>
      <div className='tittle'>Adicionar Endereço</div>
      <form method='POST' className='perfilForm' id='changeAdress'>
        <label htmlFor='cep'>CEP</label>
        <input id='cep' type='text' name='cep' placeholder='Digite seu cep.' />

        <label htmlFor='locadouro'>Endereço</label>
        <input
          id='locadouro'
          type='text'
          name='locadouro'
          placeholder='Digite seu endereço.'
        />

        <label htmlFor='cidade'>Cidade</label>
        <input
          id='cidade'
          type='text'
          name='cidade'
          placeholder='Digite sua cidade.'
        />

        <label htmlFor='estado'>Estado</label>
        <input
          id='estado'
          type='text'
          name='estado'
          placeholder='Digite seu estado.'
        />

        <label htmlFor='numero'>Número</label>
        <input
          id='numero'
          type='text'
          name='numero'
          placeholder='Digite seu numero.'
        />

        <label htmlFor='complemento'>Complemento</label>
        <input
          id='complemento'
          type='text'
          name='complemento'
          placeholder='Digite o complemento.'
        />

        <label htmlFor='pais'>País</label>
        <input
          id='pais'
          type='text'
          name='pais'
          placeholder='Digite seu pais.'
        />

        <button type='submit'>Adicionar endereço</button>
      </form>
    </div>
  );
}
