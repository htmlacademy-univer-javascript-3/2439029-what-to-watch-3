import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiPaths} from '@const/paths.ts';
import {Film, PromoFilm} from 'types/film.ts';
import {getFilms, getPromoFilm} from '@store/action.ts';
import {AppDispatch, State} from '@components/use-app/use-app.tsx';

export const fetchFilmsAction = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, {dispatch, extra: api}) => {
  const films = await api.get<Film[]>(ApiPaths.Films).then((res) => res.data);
  dispatch(getFilms(films));
});

export const fetchPromoFilmAction = createAsyncThunk<void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, {dispatch, extra: api}) => {
  const film = await api
    .get<PromoFilm>(ApiPaths.Promo)
    .then((res) => res.data);
  dispatch(getPromoFilm(film));
});
