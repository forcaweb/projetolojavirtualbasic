import * as React from 'react';
import { FooterFuncs } from './footerFunc';
import './footer.css';

export function Footer() {
  FooterFuncs();
  return (
    <div className='footerContainer'>
      <div className='campsFooter'>
        <h3>Redes Sociais</h3>
        <a href='/'>Facebook</a>
        <a href='/'>Whatsapp</a>
        <a href='/'>Instagram</a>
      </div>

      <div className='campsFooter'>
        <h3>Links úteis</h3>
        <a href='/'>Dúvidas</a>
        <a href='/'>Suporte</a>
      </div>

      <div className='campsFooter'>
        <h3>Desenvolvedor</h3>
        <a href='https://forcaweb.net'>Força Web</a>
      </div>
      <div className='campsFooterCredits'>
        <p>
          Web desenvolvida por Força Web. Versão: 1.3 © 2018 - 2022,
          www.forcaweb.net.
        </p>
      </div>
    </div>
  );
}
