import {createAction} from '@reduxjs/toolkit';
import {CatalogGenre} from 'types/genre.ts';
import {Film, PromoFilm, FilmCard} from 'types/film.ts';
import {Paths} from "@const/paths.ts";
import {ReviewType} from "types/review.ts";

export const changeGenre = createAction<CatalogGenre>('genre/changeGenre');
export const getFilms = createAction<Film[]>('films/getFilms');
export const setFilm = createAction<FilmCard | null>('films/:id');
export const setSimilarFilms = createAction<Film[]>('films/:id/similar');
export const getPromoFilm = createAction<PromoFilm>('films/getPromoFilm');
export const setReviews = createAction<ReviewType[]>('films/:id/review');
export const setGenres = createAction<CatalogGenre[]>('genre/setGenres');
export const changeShowedFilms = createAction('films/changeShowedFilms');
export const setAuthorization = createAction<boolean>('login/setAuthorization');
export const setImage = createAction<string>('user/image');
export const setError = createAction<string | null>('films/error');

export const redirectToRoute = createAction<Paths>('game/redirectToRoute');
