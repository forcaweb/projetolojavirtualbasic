/* eslint-disable no-restricted-syntax */
import React from 'react';
import {
  FaSearch,
  FaHome,
  FaCartArrowDown,
  FaList,
  FaBars,
} from 'react-icons/fa';
import { IoIosArrowDown, IoMdPerson } from 'react-icons/io';
import {
  AiOutlineClose,
  AiTwotoneHeart,
  AiOutlineQuestionCircle,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { RiNewspaperFill, RiArrowDropRightFill } from 'react-icons/ri';
import { GrContactInfo } from 'react-icons/gr';
import './header.css';
import { imagens } from '../../assets/img/imagens';

export function Menu() {
  // Array Categoria
  // const arrayCategory = [];

  function handleClickSearch(e) {
    e.preventDefault();
    const search = document.querySelector('.search');
    const searchHistory = document.querySelector('.searchHistory');
    const closeSearch = document.querySelector('.closeSearch');
    search.setAttribute('class', 'search activeSearch');
    searchHistory.style.display = 'flex';
    closeSearch.style.display = 'flex';
  }

  function handleCloseSearch(e) {
    e.preventDefault();
    const search = document.querySelector('.search');
    const searchHistory = document.querySelector('.searchHistory');
    const closeSearch = document.querySelector('.closeSearch');
    search.setAttribute('class', 'search');
    searchHistory.style.display = 'none';
    closeSearch.style.display = 'none';
  }

  // Botao de lista de categoria
  function handleClickCategory(e) {
    e.preventDefault();
    const cateforyList = document.querySelector('.listCategory');
    cateforyList.classList.toggle('showCategoryList');
  }

  // Botao de menu Responsivo
  function handleClickMenu(e) {
    e.preventDefault();
    const menuResponsive = document.querySelector('.menuResponsive');
    menuResponsive.classList.toggle('showMenuResponsive');
  }

  // // Lista as categorias
  // function listCat() {
  //   const cateforyList = document.querySelector('.listCategory');
  //   if (!arrayCategory.length > 0) return;
  //   cateforyList.innerHTML = '';
  //   for (const x of arrayCategory) {
  //     cateforyList.innerHTML += `<li><a href='/${x}'>${x}</a></li>`;
  //   }
  // }

  // // Consulta as categorias
  // async function listCategory() {
  //   const request = await fetch('http://localhost:3001/category', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((ress) => {
  //       const resp = ress;
  //       for (const x of resp) {
  //         arrayCategory.push(x.name);
  //       }
  //       listCat();
  //     });
  //   return request;
  // }

  // Chama as funções
  // listCategory();
  const showCategory = handleClickCategory.bind(this);
  // Render Component
  return (
    <div>
      <div className='menuResponsive'>
        <div className='close'>
          <h3>Menu</h3>
          <a onClick={handleClickMenu} href='/'>
            <AiOutlineClose />
          </a>
        </div>
        <div className='client'>
          <h3>
            <span>Bem Vindo(a)</span> Diego Brito
          </h3>
          <a href='/painel/perfil'>
            <RiNewspaperFill /> Perfil
          </a>
          <a href='/produtosfavoritos'>
            <AiTwotoneHeart /> Produtos Favoritos
          </a>
        </div>
        <div className='links'>
          <a href='/'>
            <FaHome /> Home
          </a>
          <a href='/painel/pedidos'>
            <FaList /> Meus Pedidos
          </a>
          <a href='/carrinhodecompra'>
            <FaCartArrowDown /> Carrinho de compra
          </a>
          <a onClick={showCategory} href='/categoria'>
            <IoIosArrowDown /> Categorias
          </a>
          <a href='/sobre'>
            <AiOutlineQuestionCircle /> Sobre
          </a>
          <a href='/contatos'>
            <GrContactInfo />
            Contatos
          </a>
          <div className='btnLogin'>
            <a href='/login'>
              <IoMdPerson /> Entrar
            </a>
          </div>
        </div>
      </div>
      <header className='header'>
        <div className='logo'>
          <a href='/'>
            <img src={imagens.logo} alt='' />
          </a>
        </div>
        <div className='search'>
          <form onSubmit={handleClickSearch} method='post' action='#'>
            <div className='campSearch'>
              <div className='closeSearch'>
                <a onClick={handleCloseSearch} href='/'>
                  <AiOutlineClose />
                </a>
              </div>
              <input
                onFocus={handleClickSearch}
                type='text'
                name='searchProduct'
                placeholder='Pesquisar por um produtos..'
                autoComplete='off'
              />
              <button type='submit'>
                <FaSearch />
              </button>
            </div>
            <div className='searchHistory'>
              <li>
                <a href='/produto/tenis'>
                  <AiOutlineFieldTime /> Tenis
                </a>
              </li>
              <li>
                <a href='/produto/vaso'>
                  <AiOutlineFieldTime /> Vaso
                </a>
              </li>
              <li>
                <a href='/produto/computador'>
                  <AiOutlineFieldTime /> Computador
                </a>
              </li>
            </div>
          </form>
        </div>
        <div className='options'>
          <a href='/painel/meuspedidos'>
            <FaList /> Meus Pedidos
          </a>
          <a href='/carrinhodecompra'>
            <FaCartArrowDown />
          </a>
        </div>
        <div className='links'>
          <a href='/'>
            <FaHome /> Home
          </a>
          <a onClick={showCategory} href='/categoria'>
            <IoIosArrowDown /> Categorias
          </a>
          <a href='/sobre'>Sobre</a>
          <a href='/contatos'>Contatos</a>
          <a href='/produtosfavoritos'>
            <AiTwotoneHeart /> Favoritos
          </a>
          <div className='btnLogin'>
            <a href='/login'>
              <IoMdPerson /> Entrar
            </a>
          </div>
        </div>
        <div className='mobileLink'>
          <a onClick={handleClickMenu} href='/'>
            <FaBars />
          </a>
        </div>
      </header>
      <div className='listCategory'>
        <li>
          <a href='/categoria/eletronico'>
            <RiArrowDropRightFill /> Eletronico
          </a>
        </li>
        <li>
          <a href='/categoria/moda'>
            <RiArrowDropRightFill /> Moda
          </a>
        </li>
        <li>
          <a href='/categoria/jardim'>
            <RiArrowDropRightFill />
            Jardim
          </a>
        </li>
      </div>
    </div>
  );
}
