import * as React from 'react';
import { validCep } from '../../middleware/andressForm';
import './addadress.css';

const btnAndress = document.querySelector('#btnAndress');
btnAndress.disabled = true;

async function findAndress() {
  const msg = document.querySelector('#msgErro');
  const cepCamp = document.querySelector('#cep');
  const cidadeCamp = document.querySelector('#cidade');
  const locadouroCamp = document.querySelector('#locadouro');
  const estadoCamp = document.querySelector('#estado');
  const complementoCamp = document.querySelector('#complemento');
  const bairroCamp = document.querySelector('#bairro');

  if (validCep(cepCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validCep(cepCamp.value));
    return;
  }
  msg.innerHTML = 'Correto!';
  msg.setAttribute('class', '');

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

export function AddAdress() {
  return (
    <div className='editPerfilContainer'>
      <div className='tittle'>Adicionar Endereço</div>
      <form method='POST' className='perfilForm' id='changeAdress'>
        <small id='msgErro'>Preencha os campos corretamente!</small>
        <label htmlFor='cep'>CEP</label>
        <input
          onChange={findAndress}
          id='cep'
          type='text'
          name='cep'
          placeholder='Digite seu cep.'
          minLength='8'
          maxLength='8'
          required
        />

        <label htmlFor='locadouro'>Endereço</label>
        <input
          id='locadouro'
          type='text'
          name='locadouro'
          placeholder='Digite seu endereço.'
          minLength='15'
          maxLength='50'
          required
        />

        <label htmlFor='bairro'>Bairro</label>
        <input
          id='bairro'
          type='text'
          name='bairro'
          placeholder='Digite seu bairro.'
          minLength='6'
          maxLength='50'
          required
        />

        <label htmlFor='cidade'>Cidade</label>
        <input
          id='cidade'
          type='text'
          name='cidade'
          placeholder='Digite sua cidade.'
          minLength='3'
          maxLength='30'
          required
        />

        <label htmlFor='estado'>Estado</label>
        <input
          id='estado'
          type='text'
          name='estado'
          placeholder='Digite seu estado.'
          minLength='2'
          maxLength='2'
          required
        />

        <label htmlFor='numero'>Número</label>
        <input
          id='numero'
          type='text'
          name='numero'
          placeholder='Digite seu numero.'
          minLength='1'
          required
        />

        <label htmlFor='complemento'>Complemento</label>
        <input
          id='complemento'
          type='text'
          name='complemento'
          placeholder='Digite o complemento.'
          minLength='3'
          maxLength='50'
          required
        />

        <button id='btnAndress' type='submit'>
          Adicionar endereço
        </button>
      </form>
    </div>
  );
}
