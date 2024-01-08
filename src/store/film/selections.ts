import {NameSpace} from '@const/namespaces.ts';
import {State} from '@components/use-app/use-app.tsx';

export const getPromoFilm = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].promoFilm;
export const getFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].filteredFilms;
export const getAllFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].allFilms;
export const getShowFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].count;
export const getFilmData = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].film;
export const getError = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].error;
export const getReviews = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].reviews;
export const getSimilarFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].similarFilms;
export const filmsDataLoading = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].isFilmsDataLoading;
export const filmDataLoading = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].isFilmDataLoading;
export const getGenre = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].genre;
export const getGenres = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].genres;
export const getSection = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].section;
export const getMyList = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].myList;
export const myListLoading = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].isMyListLoading;
export const getMyListCount = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].myListCount;
