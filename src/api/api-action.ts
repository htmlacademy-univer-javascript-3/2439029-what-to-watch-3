import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiPaths} from '@const/paths.ts';
import {Film, PromoFilm} from 'types/film.ts';
import {getFilms, getPromoFilm, setAuthorization, setError, setImage} from '@store/action.ts';
import {AppDispatch, saveToken, State, dropToken} from '@components/use-app/use-app.tsx';
import {AuthData, UserData} from 'types/post-user-request.ts';

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

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token, avatarUrl}} = await api.post<UserData>(ApiPaths.Login, {email, password});
      saveToken(token);
      dispatch(setAuthorization(true));
      dispatch(setImage(avatarUrl));
    }catch{
      setError('Заполните поля валидными значениями');
    }
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiPaths.Login);
      dispatch(setAuthorization(true));
    } catch {
      dispatch(setAuthorization(false));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiPaths.Logout);
    dropToken();
    dispatch(setAuthorization(false));
  },
);
