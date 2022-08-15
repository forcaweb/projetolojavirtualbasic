import * as React from 'react';
import { imagens } from '../../../assets/img/imagens';
import './others.css';

export function OthersProds() {
  function noActive(i) {
    const img = document.querySelectorAll('.thumbsSelect');
    for (let x = 0; x < img.length; x++) {
      if (x !== i) {
        img[x].setAttribute('class', 'thumbsSelect');
      }
    }
  }

  function selectImage() {
    const img = document.querySelectorAll('.thumbsSelect');
    const imgshow = document.querySelector('.imgSelect');
    for (let i = 0; i < img.length; i++) {
      img[i].addEventListener('click', async () => {
        const slct = await img[i].getAttribute('src');
        img[i].setAttribute('class', 'thumbsSelect active');
        imgshow.setAttribute('src', slct);
        noActive(i);
      });
    }
  }
  return (
    <div className='detailsContainer' onLoad={selectImage}>
      <form method='post'>
        <div className='imgsAmost'>
          <div className='miniImgs'>
            <img className='thumbsSelect' src={imagens.img3} alt='' />
            <img className='thumbsSelect' src={imagens.img4} alt='' />
            <img className='thumbsSelect' src={imagens.img5} alt='' />
          </div>
          <div className='largeImgs'>
            <img className='imgSelect' src={imagens.img4} alt='' />
          </div>
        </div>

        <div className='detailsProduct'>
          <div className='nameProduct'>Jarro Verde 10X5</div>
          <div className='priceProduct'>
            <span className='priceOld'>140 R$</span>
            <span className='priceNow'>
              120 R$ <span className='descont'>20% OFF</span>
            </span>
          </div>

          <div className='totalSelling'>
            Total vendido: <span className='qtdSelling'>100 uni.</span>
          </div>

          <div className='availableProduct'>
            <p>
              Disponivel:<span className='availableqtd'>200</span>Uni.
            </p>
          </div>

          <div className='qtdProduct'>
            <p>
              qtd:
              <span className='qtd'>
                <select>
                  <option value='1'>1 Unidade</option>
                  <option value='2'>2 Unidades</option>
                  <option value='3'>3 Unidades</option>
                  <option value='4'>4 Unidades</option>
                  <option value='5'>5 Unidades</option>
                  <option value='6'>6 Unidades</option>
                  <option value='7'>7 Unidades</option>
                  <option value='8'>8 Unidades</option>
                  <option value='9'>9 Unidades</option>
                  <option value='10'>10 Unidades</option>
                  <option value='11'>Mais de 10 Unidades</option>
                </select>
                <input type='text' placeholder='Digite a quantidade..' />
              </span>
            </p>
          </div>

          <div className='qtdProduct'>
            <p>Cor:</p>
            <span>Vermelha</span>
          </div>

          <div className='btnFinal'>
            <button type='submit'>Comprar agora</button>
            <button type='submit'>Adicionar ao carrinho</button>
          </div>
        </div>
      </form>
      <div className='descritionProducts'>
        <h3>Sobre o produto:</h3>
        <p>
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h3>Marca:</h3>
        <p>Jardim</p>
        <h3>Novo:</h3>
        <p>Sim</p>
      </div>
    </div>
  );
}
