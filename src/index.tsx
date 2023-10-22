import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/main/app';
import {CurrentFilm} from './components/main/current-film.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      name={CurrentFilm.name}
      genre={CurrentFilm.genre}
      date={CurrentFilm.date}
      img={CurrentFilm.img}
    />
  </React.StrictMode>
);
