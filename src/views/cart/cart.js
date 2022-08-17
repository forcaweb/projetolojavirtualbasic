import * as React from 'react';
import { FiTrash } from 'react-icons/fi';
// import { Dash, Plus } from 'react-bootstrap-icons';
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
  id: 5,
  img: imagens.logo,
  name: 'Site',
  qtd: 1,
  price: 60.1,
  avai: 50,
});

data.push({
  id: 6,
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
  data.total = result;
  textPrice.innerHTML = result.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

async function addSum(event) {
  event.preventDefault();
  const indAdd = event.target.dataset.idAdd;
  const qtd = document.getElementById(`${indAdd}`);
  const isNumber = Number(qtd.value);

  const index = data.findIndex((user) => user.id === Number(indAdd));

  if (Number(qtd.value) > data[index].avai) {
    qtd.value = Number(data[index].avai);
  }

  if (Number(qtd.value) < 1) {
    qtd.value = 1;
  }

  if (Number.isNaN(isNumber)) {
    qtd.value = 1;
  }

  if (Number(qtd.value) === data[index].avai) return;

  if (indAdd) {
    qtd.value = Number(qtd.value) + 1;
    data[index].qtd = Number(qtd.value);
  }
  sumTotal();
}

async function subSum(event) {
  event.preventDefault();
  const indSub = event.target.dataset.idSub;
  const qtd = document.getElementById(`${indSub}`);
  const isNumber = Number(qtd.value);

  const index = data.findIndex((user) => user.id === Number(indSub));

  if (Number(qtd.value) > data[index].avai) {
    qtd.value = Number(data[index].avai);
  }

  if (Number.isNaN(isNumber)) {
    qtd.value = 1;
  }

  if (indSub) {
    qtd.value = Number(qtd.value) - 1;
    if (Number(qtd.value) < 1) {
      qtd.value = 1;
    }
    data[index].qtd = Number(qtd.value);
  }
  sumTotal();
}

async function subSumInput(event) {
  const inputIndice = await event.target.id;
  const qtd = document.getElementById(inputIndice);
  const index = data.findIndex((user) => user.id === Number(inputIndice));
  const isNumber = Number(qtd.value);
  if (Number(qtd.value) > data[index].avai) {
    qtd.value = Number(data[index].avai);
  }
  if (Number(qtd.value) < 1) {
    qtd.value = 1;
  }
  if (Number.isNaN(isNumber)) {
    qtd.value = 1;
  }
  data[index].qtd = Number(qtd.value);
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
              <span className='ballMsg'>QTD</span>
              <button
                type='button'
                href='/'
                className='subQtd'
                data-id-sub={item.id}
                onClick={subSum}
              >
                -
              </button>
              <input
                type='text'
                name='qtd'
                id={item.id}
                className='qtd'
                placeholder={item.qtd}
                defaultValue={item.qtd}
                onBlur={subSumInput}
              />
              <button
                type='button'
                href='/'
                className='addQtd'
                data-id-add={item.id}
                onClick={addSum}
              >
                +
              </button>
            </div>
            <div className='priceProd'>
              <span className='ballMsg'>Preço</span>
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
              <span className='ballMsg'>Disp</span>
              <span className='price'>({item.avai})</span>
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
