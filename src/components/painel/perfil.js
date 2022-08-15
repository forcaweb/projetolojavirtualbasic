import * as React from 'react';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { imagens } from '../../assets/img/imagens';

export function Perfil() {
  return (
    <div className='perfilContainer'>
      <div className='title'>
        <h3>Perfil</h3>
      </div>
      <div className='infoClient'>
        <div className='campText edit'>
          <a href='/editar/perfil/1' title='Editar Perfil'>
            <FiEdit2 />
          </a>
        </div>
        <img src={imagens.logo} alt='' />
        <div className='campText'>
          <h3>Nome:</h3>
          <p>Diego Brito</p>
        </div>
        <div className='campText'>
          <h3>Email:</h3>
          <p>teste@teste.com</p>
        </div>
        <div className='campText'>
          <h3>Telefone:</h3>
          <p>(84) 9 9633-8660</p>
        </div>
        <div className='campText'>
          <h3>Data de inscrição:</h3>
          <p>01/01/1900</p>
        </div>
        <div className='campTextMobile'>
          <a href='/editar/perfil/1' title='Editar Perfil'>
            <FiEdit2 /> Editar
          </a>
        </div>
      </div>

      <div className='title'>
        <h3>Endereços</h3>
      </div>

      <div className='infoClient'>
        <div className='campText edit'>
          <a href='/editar/enderecos/1' title='Editar Endereços'>
            <FiEdit2 />
          </a>
          <a href='/delete/endereco' title='Deletar Endereços'>
            <FiTrash />
          </a>
        </div>
        <div className='campText'>
          <h3>Endereço:</h3>
          <p>Rua sadi mendes</p>
        </div>
        <div className='campText'>
          <h3>Número:</h3>
          <p>1500A</p>
        </div>
        <div className='campText'>
          <h3>Complemento:</h3>
          <p>Bloco A</p>
        </div>
        <div className='campText'>
          <h3>Estado:</h3>
          <p>Rio Grande do Norte</p>
        </div>
        <div className='campText'>
          <h3>Pais:</h3>
          <p>Brasil</p>
        </div>
        <div className='campTextMobile'>
          <a href='/editar/enderecos/1' title='Editar Perfil'>
            <FiEdit2 /> Editar
          </a>
          <a href='/delete/endereco' title='Deletar Endereços'>
            <FiTrash /> Deletar
          </a>
        </div>
      </div>

      <div className='addAdress'>
        <a href='/editar/adicionarendereco'>
          <AiOutlinePlusCircle /> Adicionar novo endereço.
        </a>
      </div>
    </div>
  );
}
