import * as React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { FuncLogin } from './funcLogin';

export function LoginFormComponents() {
  return (
    <div className='loginContainer'>
      <div className='boxForm'>
        <div className='tittle'>
          <FiLogIn /> Login
        </div>
        <form onSubmit={FuncLogin()} className='form'>
          <div>Email:</div>
          <input
            className='email'
            name='email'
            type='text'
            placeholder='Digite seu email..'
          />
          <div>Senha:</div>
          <input
            className='passwd'
            name='passwd'
            type='password'
            placeholder='Digite sua senha...'
          />
          <button type='submit'>Entrar</button>
          <li>
            <a href='/register'>Criar Conta</a>
          </li>
        </form>
      </div>
    </div>
  );
}
