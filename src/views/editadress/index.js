import * as React from 'react';
import {
  validCep,
  validAddress,
  validCity,
  validDistrict,
  validState,
  validComplement,
  validNum,
} from '../../middleware/andressForm';
import './editadress.css';

const btnAndress = document.querySelector('#btnAndress');
if (btnAndress) btnAndress.disabled = true;

function checkFields() {
  const msg = document.querySelector('#msgErro');
  const cepCamp = document.querySelector('#cep');
  const cidadeCamp = document.querySelector('#cidade');
  const locadouroCamp = document.querySelector('#locadouro');
  const estadoCamp = document.querySelector('#estado');
  const complementoCamp = document.querySelector('#complemento');
  const bairroCamp = document.querySelector('#bairro');
  const numeroCamp = document.querySelector('#numero');
  if (!cepCamp.value.length > 10) return;
  if (validCep(cepCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validCep(cepCamp.value));
    return;
  }

  if (validAddress(locadouroCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validAddress(locadouroCamp.value));
    return;
  }

  if (validCity(cidadeCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validCity(cidadeCamp.value));
    return;
  }

  if (validState(estadoCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validState(estadoCamp.value));
    return;
  }

  if (validDistrict(bairroCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validDistrict(bairroCamp.value));
    return;
  }

  if (validComplement(complementoCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validComplement(complementoCamp.value));
    return;
  }

  if (validNum(numeroCamp.value) !== true) {
    msg.setAttribute('class', 'msgErroActive');
    msg.innerHTML = String(validNum(numeroCamp.value));
    return;
  }
  msg.innerHTML = 'Correto!';
  msg.setAttribute('class', '');
}

async function findAndress() {
  const msg = document.querySelector('#msgErro');
  const cepCamp = document.querySelector('#cep');
  const cidadeCamp = document.querySelector('#cidade');
  const locadouroCamp = document.querySelector('#locadouro');
  const estadoCamp = document.querySelector('#estado');
  const complementoCamp = document.querySelector('#complemento');
  const bairroCamp = document.querySelector('#bairro');
  if (!cepCamp.value.length > 10) return;
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

export function EditAdress() {
  return (
    <div className='editPerfilContainer'>
      <div className='tittle'>Editar Endereço</div>
      <form
        onBlur={checkFields}
        method='POST'
        className='perfilForm'
        id='changeAdress'
      >
        <small id='msgErro'>Preencha os campos corretamente!</small>
        <label htmlFor='cep'>CEP</label>
        <input
          onChange={findAndress}
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
