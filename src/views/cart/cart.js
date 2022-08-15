import * as React from 'react';
import { FiTrash } from 'react-icons/fi';
import { Dash, Plus } from 'react-bootstrap-icons';
import { imagens } from '../../assets/img/imagens';
import './cart.css';

const ship = 10;

const data = [];

data.push({
  id: 1,
  img: imagens.img3,
  name: 'Roupa Feminina verao 2022',
  qtd: 1,
  price: 150.1,
  avai: 10,
});

data.push({
  id: 2,
  img: imagens.img4,
  name: 'Imagem 2',
  qtd: 1,
  price: 152.1,
  avai: 15,
});

data.push({
  id: 3,
  img: imagens.img4,
  name: 'Imagem 2',
  qtd: 1,
  price: 152.1,
  avai: 15,
});

data.push({
  id: 4,
  img: imagens.logo,
  name: 'Site',
  qtd: 1,
  price: 60.1,
  avai: 50,
});

function sumTotal() {
  const textPrice = document.querySelector('.textPrice');
  const priceTotal = [];
  const priceFinal = [];
  data.map((itens) => priceTotal.push({ price: itens.price, qtd: itens.qtd }));
  for (let i = 0; i < priceTotal.length; i++) {
    priceFinal.push(priceTotal[i].price * priceTotal[i].qtd);
  }
  let result = priceFinal.reduce((total, num) => total + num);
  result += ship;
  textPrice.innerHTML = result.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

async function addSum(event) {
  event.preventDefault();
  const qtd = document.querySelectorAll('.qtd');
  const indAdd = event.target.dataset.idAdd;
  if (indAdd === undefined) return;
  const indInput = await qtd[indAdd - 1].dataset.idQtd;
  if (Number(qtd[indAdd - 1].value) > data[indAdd - 1].avai) {
    qtd[indAdd - 1].value = Number(data[indAdd - 1].avai);
  }
  if (Number(qtd[indAdd - 1].value) < 1) {
    qtd[indAdd - 1].value = 1;
  }
  if (Number(qtd[indAdd - 1].value) === data[indAdd - 1].avai) return;
  if (indAdd === indInput) {
    qtd[indAdd - 1].value = Number(qtd[indAdd - 1].value) + 1;
    data[indAdd - 1].qtd = Number(qtd[indAdd - 1].value);
  }
  sumTotal();
}

async function subSum(event) {
  event.preventDefault();
  const qtd = document.querySelectorAll('.qtd');
  const indSub = event.target.dataset.idSub;
  if (indSub === undefined) return;
  const indInput = await qtd[indSub - 1].dataset.idQtd;
  if (Number(qtd[indSub - 1].value) > data[indSub - 1].avai) {
    qtd[indSub - 1].value = Number(data[indSub - 1].avai);
  }
  if (Number(qtd[indSub - 1].value) < 1) {
    qtd[indSub - 1].value = 1;
  }
  if (Number(qtd[indSub - 1].value) === 1) return;
  if (indSub === indInput) {
    qtd[indSub - 1].value = Number(qtd[indSub - 1].value) - 1;
    data[indSub - 1].qtd = Number(qtd[indSub - 1].value);
  }
  sumTotal();
}

async function subSumInput(event) {
  const qtd = document.querySelectorAll('.qtd');
  const inputIndice = await event.target.dataset.idQtd;
  if (Number(qtd[inputIndice - 1].value) > data[inputIndice - 1].avai) {
    qtd[inputIndice - 1].value = Number(data[inputIndice - 1].avai);
  }
  if (Number(qtd[inputIndice - 1].value) < 1) {
    qtd[inputIndice - 1].value = 1;
  }
  data[inputIndice - 1].qtd = Number(qtd[inputIndice - 1].value);
  sumTotal();
}

function cartInit() {
  sumTotal();
}

export function Cart() {
  return (
    <div className='cartContainer'>
      <div className='tittle'>Meu Carrinho</div>
      <div className='cart' onLoad={cartInit}>
        {data.map((item) => (
          <div key={item.id} className='itens'>
            <div className='imgProd'>
              <img src={item.img} alt='' />
            </div>
            <div className='nameProd'>
              <h3>{item.name}</h3>
            </div>
            <div className='qtdProd'>
              <button type='button' href='/' className='subQtd'>
                <Dash data-id-sub={item.id} onClick={subSum} />
              </button>
              <input
                type='text'
                name='qtd'
                data-id-qtd={item.id}
                className='qtd'
                placeholder={item.qtd}
                defaultValue={item.qtd}
                onBlur={subSumInput}
              />
              <button type='button' href='/' className='addQtd'>
                <Plus data-id-add={item.id} onClick={addSum} />
              </button>
            </div>
            <div className='priceProd'>
              <span className='price'>
                <span className='pricevalue' data-price={item.price}>
                  {item.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </span>
            </div>
            <div className='priceProd'>
              <span className='price'>Disp.: {item.avai}</span>
            </div>
            <div className='deleteProd'>
              <span className='delete'>
                <FiTrash />
              </span>
              <p>Apagar</p>
            </div>
          </div>
        ))}
      </div>
      <div className='checkoutContainer'>
        <div className='priceTotal'>
          <div className='shipping'>
            <span className='text'>Frete: </span>
            <span className='textShip'>
              {ship.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className='price'>
            <span className='text'>Valor Total: </span>
            <span className='textPrice'>160,00 R$ </span>
          </div>
        </div>
        <div className='finishCart'>
          <div className='payLink'>
            <a href='/' className='text'>
              Finalizar Compra
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
