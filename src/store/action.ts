import {createAction} from '@reduxjs/toolkit';
import {CatalogGenre} from 'types/genre.ts';

export const changeGenre = createAction<CatalogGenre>('genre/change');
export const takeFilms = createAction('genre/films');
export const setGenres = createAction<CatalogGenre[]>('genre');
