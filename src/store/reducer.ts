import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  changeShowedFilms, setFilm,
  getFilms,
  getPromoFilm,
  setAuthorization,
  setError,
  setGenres,
  setImage
} from './action.ts';
import {CatalogGenre} from 'types/genre.ts';
import {Film, PromoFilm, FilmCard} from 'types/film.ts';
import {showedFilmsCount} from '@const/values.ts';

type initialStateProps = {
  genre: CatalogGenre;
  genres: CatalogGenre[];
  filteredFilms: Film[];
  promoFilm: PromoFilm | null;
  allFilms: Film[];
  count: number;
  authorizationStatus: boolean;
  image: string;
  error: string | null;
  film: FilmCard | null;
};

const initialState: initialStateProps = {
  genre: 'All genres',
  genres: [],
  promoFilm: null,
  filteredFilms: [],
  allFilms: [],
  count: showedFilmsCount,
  authorizationStatus: false,
  image: 'img/avatar.jpg',
  error: null,
  film: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.count = showedFilmsCount;
      if (state.genre === 'All genres') {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((film) =>
          film.genre === state.genre);
      }
    })
    .addCase(getFilms, (state, action) => {
      state.allFilms = action.payload;
      state.filteredFilms = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      if (!state.authorizationStatus){
        state.image = 'img/avatar.jpg';
      }else{
        state.error = null;
      }
    })
    .addCase(setImage, (state, action) => {
      state.image = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(changeShowedFilms, (state) => {
      state.count =
        state.filteredFilms.length > state.count + showedFilmsCount
          ? state.count + showedFilmsCount
          : state.filteredFilms.length;
    });
});

export {reducer};
