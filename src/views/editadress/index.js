import * as React from 'react';
import './editadress.css';

async function findAndress() {
  const cepCamp = document.querySelector('#cep');
  const cidadeCamp = document.querySelector('#cidade');
  const locadouroCamp = document.querySelector('#locadouro');
  const estadoCamp = document.querySelector('#estado');
  const complementoCamp = document.querySelector('#complemento');
  const bairroCamp = document.querySelector('#bairro');
  const match = /^[0-9]+$/gi;
  if (cepCamp.value.length < 8) return;
  if (cepCamp.value.length >= 9) return;
  if (!cepCamp.value.match(match)) return;

  await fetch(`http://viacep.com.br/ws/${cepCamp.value}/json/`, {
    cors: {
      origin: 'http://localhost',
      methods: ['GET', 'POST'],
      credentials: true,
      transports: ['websocket', 'polling'],
    },
    allowEIO3: true,
  })
    .then((resp) => resp.json())
    .then((obj) => {
      if (obj.erro) return;
      cidadeCamp.value = obj.localidade;
      locadouroCamp.value = obj.logradouro;
      estadoCamp.value = obj.uf;
      complementoCamp.value = obj.complemento;
      bairroCamp.value = obj.bairro;
    });
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

        <label htmlFor='bairro'>Bairro</label>
        <input
          id='bairro'
          type='text'
          name='bairro'
          placeholder='Digite seu bairro.'
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

        <button type='submit' id='btnadress'>
          Alterar endereço
        </button>
      </form>
    </div>
  );
}
