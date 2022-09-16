import * as React from 'react';
import { imagens } from '../../assets/img/imagens';
import './editperfil.css';

const userData = [];

userData.push({
  nome: 'Diego',
  sobrenome: 'Brito',
  email: 'teste@teste.com',
  phone: '84996338660',
  cpf: '123.456.789.10',
  avatar: imagens.logo,
});

function editImage() {
  const campAvatar = document.getElementById('avatar');
  campAvatar.click();
}

function formPerfil(e) {
  e.preventDefault();
}

async function inputAvatar() {
  const campAvatar = document.getElementById('avatar');
  // const img = document.getElementById('imgTemp');
  // img.setAttribute('src', campAvatar.files[0]);
  console.log(campAvatar.files[0]);
}

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
        <div className='changeAvatar'>
          <img id='imgTemp' src={userData[0].avatar} alt='' />
          <button type='button' className='btnEditAvatar' onClick={editImage}>
            Alterar foto
          </button>
        </div>
        <input
          onChange={inputAvatar}
          id='avatar'
          type='file'
          name='avatar'
          accept='.jpg, .jpeg, .png'
        />
        <label htmlFor='name'>Nome</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Seu nome'
          defaultValue={userData[0].nome}
        />
        <label htmlFor='fastname'>Sobrenome</label>
        <input
          id='fastname'
          type='text'
          name='fastname'
          placeholder='Seu sobrenome'
          defaultValue={userData[0].sobrenome}
        />
        <label htmlFor='cpf'>CPF</label>
        <input
          id='cpf'
          type='text'
          name='cpf'
          placeholder='CPF'
          defaultValue={userData[0].cpf}
          disabled
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          name='email'
          placeholder='Seu email'
          defaultValue={userData[0].email}
          disabled
        />
        <label htmlFor='phone'>Telefone</label>
        <input
          id='phone'
          type='text'
          name='phone'
          placeholder='Seu telefone'
          defaultValue={userData[0].phone}
        />
        <button type='submit' onClick={formPerfil}>
          Salvar Perfil
        </button>
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
