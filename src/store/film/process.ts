import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '@const/namespaces.ts';
import {CatalogGenre} from 'types/genre.ts';
import {Film, FilmCard, PromoFilm} from 'types/film.ts';
import {SHOWED_FILMS_COUNT} from '@const/values.ts';
import {ReviewType} from 'types/review.ts';
import {
  fetchFilmsAction,
  fetchPromoFilmAction,
  getFilm,
  fetchMyList,
  postFavorite,
  postReview
} from '@api/api-action.ts';
import browserHistory from '../../browser-history.ts';
import {PATHS} from '@const/paths.ts';

type initialStateType = {
  genre: CatalogGenre;
  genres: CatalogGenre[];
  filteredFilms: Film[];
  promoFilm: PromoFilm | null;
  allFilms: Film[];
  count: number;
  authorizationStatus: boolean;
  error: string | null;
  film: FilmCard | null;
  similarFilms: Film[];
  reviews: ReviewType[];
  section: 'Overview' | 'Details' | 'Reviews';
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  isPromoFilmLoading: boolean;
  myList: Film[];
  isMyListLoading: boolean;
  myListCount: number;
  hasMyListError: boolean;
  hasFilmsError: boolean;
  hasPromoFilmError: boolean;
};

const initialState: initialStateType = {
  genre: 'All genres',
  genres: [],
  promoFilm: null,
  filteredFilms: [],
  allFilms: [],
  count: SHOWED_FILMS_COUNT,
  authorizationStatus: false,
  error: null,
  film: null,
  similarFilms: [],
  reviews: [],
  section: 'Overview',
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  isPromoFilmLoading: false,
  myList: [],
  isMyListLoading: false,
  myListCount: 0,
  hasMyListError: false,
  hasFilmsError: false,
  hasPromoFilmError: false,
};


export const FilmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    changeShowedFilms(state) {
      state.count = state.filteredFilms.length > state.count + SHOWED_FILMS_COUNT
        ? state.count + SHOWED_FILMS_COUNT : state.filteredFilms.length;
    },
    setError(state, action: {
      payload: string | null;
    }) {
      state.error = action.payload;
    },
    setGenres(state, action: {
      payload: CatalogGenre[];
    }) {
      state.genres = action.payload;
    },
    setSection(state, action: {
      payload: 'Overview' | 'Details' | 'Reviews';
    }) {
      state.section = action.payload;
    },
    changeGenre(state, action: {
      payload: CatalogGenre;
    }) {
      state.genre = action.payload;
      state.count = SHOWED_FILMS_COUNT;
      if (state.genre === 'All genres') {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((film) =>
          film.genre === state.genre);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
        state.hasFilmsError = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
        state.hasFilmsError = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.allFilms = action.payload;
        state.filteredFilms = action.payload;
        state.isFilmsDataLoading = false;
        state.hasFilmsError = false;
      })
      .addCase(getFilm.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchMyList.pending, (state) => {
        state.isMyListLoading = true;
        state.hasMyListError = false;
      })
      .addCase(fetchMyList.rejected, (state) => {
        state.isMyListLoading = false;
        state.hasMyListError = true;
      })
      .addCase(fetchMyList.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.myListCount = state.myList.length;
        state.isMyListLoading = false;
        state.hasMyListError = false;
      })
      .addCase(getFilm.fulfilled, (state, action) => {
        const filmData = action.payload;
        state.film = filmData.filmCard;
        state.reviews = filmData.comments;
        state.similarFilms = filmData.moreLikeThis;
        state.isFilmDataLoading = false;
      })
      .addCase(getFilm.rejected, (state) => {
        state.isFilmDataLoading = false;
        browserHistory.push(PATHS.NotFound());
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
        state.hasPromoFilmError = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isPromoFilmLoading = false;
        state.hasPromoFilmError = true;
      })
      .addCase(postReview.rejected, (state) => {
        state.error = 'The comment was not published, something went wrong(';
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
        state.hasPromoFilmError = false;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        const film = action.payload;
        if (state.promoFilm && state.promoFilm.id === film.id) {
          state.promoFilm.isFavorite = film.isFavorite;
        }
        if (state.film && state.film.id === film.id) {
          state.film.isFavorite = film.isFavorite;
        }
        if (film.isFavorite) {
          state.myListCount += 1;
        } else {
          state.myListCount -= 1;
        }
      });
  }
});


export const {changeShowedFilms, setError, setSection, setGenres, changeGenre} = FilmProcess.actions;
