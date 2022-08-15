import * as React from 'react';
import { imagens } from '../../assets/img/imagens';
import './orders.css';

export function OrdersDetails() {
  return (
    <div className='ordersContainer'>
      <div className='tittle'>
        <h4>
          Detalhes do Pedido <span className='numOrder'>#474789</span>
        </h4>
      </div>
      <div className='boxsProds'>
        <div className='itens'>
          <div className='nameProds'>
            <div className='name'>Liquidiicador</div>
          </div>
          <div className='qtdProds'>
            <div className='qtd'>10 units</div>
          </div>
          <div className='priceProds'>150,00 R$</div>
          <div className='imgProds'>
            <img src={imagens.logo} alt='' />
          </div>
        </div>
        <div className='itens'>
          <div className='nameProds'>
            <div className='name'>Liquidiicador eletrico</div>
          </div>
          <div className='qtdProds'>
            <div className='qtd'>1 units</div>
          </div>
          <div className='priceProds'>15,00 R$</div>
          <div className='imgProds'>
            <img src={imagens.logo} alt='' />
          </div>
        </div>
      </div>

      <div className='tittle'>
        <h4>Cliente</h4>
      </div>

      <div className='boxsClient'>
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
      </div>

      <div className='tittle'>
        <h4>Dados de envio</h4>
      </div>

      <div className='boxsShipping'>
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
      </div>

      <div className='tittle'>
        <h4>Dados de Pagamento</h4>
      </div>

      <div className='boxsPaygment'>
        <div className='campText'>
          <h3>Metodo de pagamento:</h3>
          <p>Cartão Crédito</p>
        </div>
        <div className='campText'>
          <h3>Parcelas:</h3>
          <p>
            150,00 R$ <span>2x</span>
          </p>
        </div>
        <div className='campText'>
          <h3>Status:</h3>
          <p>Pago</p>
        </div>
      </div>

      <div className='boxsPaygment'>
        <div className='campText'>
          <h3>Metodo de pagamento:</h3>
          <p>Boleto</p>
        </div>
        <div className='campText'>
          <h3>A vista:</h3>
          <p>150,00 R$</p>
        </div>
        <div className='campText'>
          <h3>Status:</h3>
          <p>Pago</p>
        </div>
        <div className='campText'>
          <h3>Link do PDF:</h3>
          <a href='/'>Clique aqui</a>
        </div>
      </div>

      <div className='boxsPaygment'>
        <div className='campText'>
          <h3>Metodo de pagamento:</h3>
          <p>Pix</p>
        </div>
        <div className='campText'>
          <h3>A vista:</h3>
          <p>150,00 R$</p>
        </div>
        <div className='campText'>
          <h3>Status:</h3>
          <p>Pago</p>
        </div>
      </div>
    </div>
  );
}
