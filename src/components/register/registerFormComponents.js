import * as React from 'react';
import { IoMdCreate } from 'react-icons/io';
import { imagens } from '../../assets/img/imagens';

export function RegisterFormComponents() {
  return (
    <div className='loginContainer'>
      <div className='images'>
        <img src={imagens.imgForm} alt='' />
      </div>
      <div className='boxForm'>
        <div className='tittle'>
          <IoMdCreate /> Cadastre-se
        </div>
        <form className='form'>
          <div>Nome:</div>
          <input
            className='nome'
            name='nome'
            type='text'
            placeholder='Digite seu nome.'
          />
          <div>Sobrenome:</div>
          <input
            className='sobrenome'
            name='sobrenome'
            type='text'
            placeholder='Digite seu sobrenome.'
          />
          <div>Contato:</div>
          <input
            className='telefone'
            name='telefone'
            type='text'
            placeholder='Digite seu número de contato.'
          />
          <div>Email:</div>
          <input
            className='email'
            name='email'
            type='text'
            placeholder='Digite seu email.'
          />
          <div>Senha:</div>
          <input
            className='passwd'
            name='passwd'
            type='password'
            placeholder='Digite sua senha.'
          />
          <button type='submit'>Entrar</button>
          <li>
            <a href='/login'>Logar Conta</a>
          </li>
        </form>
      </div>
    </div>
  );
}
