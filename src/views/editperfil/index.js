import * as React from 'react';
import './editperfil.css';

export function EditPerfil() {
  return (
    <div className='editPerfilContainer'>
      <div className='tittle'>Editar Perfil</div>
      <form
        method='POST'
        className='perfilForm'
        encType='multipart/form-data'
        id='editPerfil'
      >
        <div className='changeAvatar'>imagem.jpg</div>
        <label className='btnEditAvatar' htmlFor='avatar'>
          Alterar foto
        </label>
        <input
          id='avatar'
          type='file'
          name='avatar'
          accept='.jpg, .jpeg, .png'
        />

        <label htmlFor='name'>Nome</label>
        <input id='name' type='text' name='name' placeholder='Seu nome' />

        <label htmlFor='fastname'>Sobrenome</label>
        <input
          id='fastname'
          type='text'
          name='fastname'
          placeholder='Seu sobrenome'
        />

        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' placeholder='Seu email' />

        <label htmlFor='phone'>Telefone</label>
        <input id='phone' type='text' name='phone' placeholder='Seu telefone' />

        <button type='submit'>Alterar senha</button>
      </form>

      <div className='tittle'>Editar Senha</div>
      <form method='POST' className='perfilForm' id='changePassword'>
        <label htmlFor='oldPassword'>Senha Antiga</label>
        <input
          id='oldPassword'
          type='password'
          name='oldPassword'
          placeholder='Digite senha antiga.'
        />

        <label htmlFor='password'>Nova Senha</label>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Digite senha nova.'
        />

        <label htmlFor='repassword'>Repita a senha</label>
        <input
          id='repassword'
          type='password'
          name='repassword'
          placeholder='Repita senha nova.'
        />

        <button type='submit'>Alterar senha</button>
      </form>
    </div>
  );
}
