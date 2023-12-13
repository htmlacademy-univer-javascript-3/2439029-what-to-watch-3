import {createAction} from '@reduxjs/toolkit';
import {CatalogGenre} from 'types/genre.ts';
import {Film,PromoFilm} from 'types/film.ts';

export const changeGenre = createAction<CatalogGenre>('genre/changeGenre');
export const getFilms = createAction<Film[]>('films/getFilms');
export const getPromoFilm = createAction<PromoFilm>('films/getPromoFilm');

export const setGenres = createAction<CatalogGenre[]>('genre/setGenres');
export const changeShowedFilms = createAction('films/changeShowedFilms');
export const setAuthorization = createAction<boolean>('login/setAuthorization');
export const setUserImage = createAction<string>('user/image');
export const setError = createAction<string | null>('films/error');
