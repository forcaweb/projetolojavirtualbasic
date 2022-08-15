/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { imagens } from '../../assets/img/imagens';
import './produto.css';
// import { useParams } from 'react-router-dom';

export function Produto() {
  // async function teste() {
  //   const { q } = await useParams();
  //   document.querySelector('.teste').innerHTML = `${q}`;
  // }
  // teste();
  return (
    <>
      <div className='tittlePosts'>Resultado da pesquisa:</div>
      <div className='searchProdContainer'>
        <div className='productsPosted'>
          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>

          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>

          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>

          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>

          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>

          <div className='cardBox'>
            <div className='imgProd'>
              <img src={imagens.logo} alt='' />
            </div>
            <div className='descProd'>
              <p>Loja Virtual Força Web</p>
            </div>
            <div className='priceProd'>
              <span>150,00 R$</span>
              <p>109,00 R$</p>
              <p className='shiping'>Frete Grátis</p>
            </div>
            <div className='linkProd'>
              <a href='/'>Ir ao produto</a>
            </div>
          </div>
        </div>
      </div>
      <div className='navigationProducts'>
        <div className='prevPage'>
          <IoIosArrowBack />
        </div>
        <div className='nowPage'>1</div>
        <div className='afterPage'>2</div>
        <div className='nextPage'>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}
