import * as React from 'react';
import './msgStyle.css';

export function MsgAlert() {
  return (
    <div className='alertContainer'>
      <div className='content'>
        <div className='titlle'>
          <h3>Atenção!!</h3>
        </div>
        <div className='text'>
          <p>Deseja fazer as alterações?</p>
        </div>
        <div className='result'>
          <button id='yes' type='button'>
            Sim
          </button>
          <button id='no' type='button'>
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
