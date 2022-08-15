import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './routes/Routes';

export default function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Rotas />
      </React.StrictMode>
    </BrowserRouter>
  );
}
