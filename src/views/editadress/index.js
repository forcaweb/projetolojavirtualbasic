import * as React from 'react';
import './editadress.css';

async function findAndress() {
  const cepCamp = document.querySelector('#cep');
  const match = /^[0-9]+$/gi;
  if (cepCamp.value.length < 6) return;
  if (!cepCamp.value.match(match)) return;
  const cepFind = await fetch(
    `http://viacep.com.br/ws/${cepCamp.value}/json/`,
    {
      method: 'GET',
    },
  )
    .then((resp) => resp)
    .then((obj) => obj.json());
  console.log(cepFind);
}

export function EditAdress() {
  return (
    <div className='editPerfilContainer'>
      <div className='tittle'>Editar Endereço</div>
      <form method='POST' className='perfilForm' id='changeAdress'>
        <label htmlFor='cep'>CEP</label>
        <input
          onBlur={findAndress}
          id='cep'
          type='text'
          name='cep'
          placeholder='Digite seu cep.'
        />

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

        <button type='submit'>Alterar endereço</button>
      </form>
    </div>
  );
}
