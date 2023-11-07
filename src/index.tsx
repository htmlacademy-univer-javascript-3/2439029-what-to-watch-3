import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/main/app';
import {CurrentFilm} from 'types/current-film.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...CurrentFilm}/>
  </React.StrictMode>
);
