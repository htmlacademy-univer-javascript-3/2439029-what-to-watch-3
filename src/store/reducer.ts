import {films} from '@mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, takeFilms, setGenres, changeShowedFilms} from './action.ts';
import {CatalogGenre} from 'types/genre.ts';
import {Film} from 'types/film.ts';
import {showedFilmsCount} from '@const/values.ts';

type initialStateProps = {
  genre: CatalogGenre;
  genres: CatalogGenre[];
  filteredFilms: Film[];
  allFilms: Film[];
  count: number;
};

const initialState: initialStateProps = {
  genre: 'All genres',
  genres: [],
  filteredFilms: films,
  allFilms: films,
  count: showedFilmsCount,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.count = showedFilmsCount;
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
    })
    .addCase(changeShowedFilms, (state) => {
      state.count =
        state.filteredFilms.length > state.count + showedFilmsCount
          ? state.count + showedFilmsCount
          : state.filteredFilms.length;
    });
});

export {reducer};
