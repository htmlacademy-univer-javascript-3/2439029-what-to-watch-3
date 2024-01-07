import {NameSpace} from '@const/namespaces.ts';
import {State} from '@components/use-app/use-app.tsx';

export const getPromoFilm = (state: State) => state[NameSpace.Film].promoFilm;
export const getFilms = (state: State) => state[NameSpace.Film].filteredFilms;
export const getAllFilms = (state: State) => state[NameSpace.Film].allFilms;
export const getShowFilms = (state: State) => state[NameSpace.Film].count;
export const getFilmData = (state: State) => state[NameSpace.Film].film;
export const getError = (state: State) => state[NameSpace.Film].error;
export const getReviews = (state: State) => state[NameSpace.Film].reviews;
export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
export const filmsDataLoading = (state: State) => state[NameSpace.Film].isFilmsDataLoading;
export const filmDataLoading = (state: State) => state[NameSpace.Film].isFilmDataLoading;
export const getGenre = (state: State) => state[NameSpace.Film].genre;
export const getGenres = (state: State) => state[NameSpace.Film].genres;
export const getSection = (state: State) => state[NameSpace.Film].section;
