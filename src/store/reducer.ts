import {films} from '@mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, takeFilms, setGenres} from './action.ts';
import {CatalogGenre} from 'types/genre.ts';
import {Film} from 'types/film.ts';

type initialStateProps = {
  genre: CatalogGenre;
  genres: CatalogGenre[];
  filteredFilms: Film[];
  allFilms: Film[];
};

const initialState: initialStateProps = {
  genre: 'All genres',
  genres: [],
  filteredFilms: films,
  allFilms: films
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state) => {
      if (state.genre === 'All genres') {
        state.filteredFilms = films;
      } else {
        state.filteredFilms = films.filter((film) =>
          film.genre === state.genre);
      }
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    });
});

export {reducer};
