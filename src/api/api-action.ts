import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiPaths, Paths} from '@const/paths.ts';
import {Film, FilmCard, PromoFilm} from 'types/film.ts';
import {AppDispatch, State} from '@components/use-app/use-app.tsx';
import {AuthData, UserData} from 'types/request/post-user-request.ts';
import {ReviewType} from 'types/review.ts';
import {ReviewComment, ReviewCommentResponse} from 'types/request/post-comment-request.ts';
import browserHistory from '../browser-history.ts';
import {FavoriteData} from 'types/request/post-favorite-request.ts';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, {extra: api}) => await api.get<Film[]>(ApiPaths.Films()).then((res) => res.data));

export const fetchMyList = createAsyncThunk<Film[], undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchMyList', async (_arg, {extra: api}) => await api.get<Film[]>(ApiPaths.Favorite()).then((res) => res.data));

export const fetchPromoFilmAction = createAsyncThunk<PromoFilm, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, {extra: api}) => await api.get<PromoFilm>(ApiPaths.Promo()).then((res) => res.data));

export const login = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email: email, password}, {extra: api}) => await api.post<UserData>(ApiPaths.Login(), {
    email,
    password
  }).then((res) => res.data));

export const checkAuth = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => await api.get<UserData>(ApiPaths.Login()).then((res) => res.data.avatarUrl)
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiPaths.Logout());
  },
);

export const getFilm = createAsyncThunk<{
  filmCard: FilmCard;
  comments: ReviewType[];
  moreLikeThis: Film[];
}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/:id',
  async (id, {extra: api}) => {
    const [{data: filmCard}, {data: comments}, {data: moreLikeThis}] =
      await Promise.all([
        api.get<FilmCard>(ApiPaths.Film(id)),
        api.get<ReviewType[]>(ApiPaths.Comments(id)),
        api.get<Film[]>(ApiPaths.Similar(id)),
      ]);
    return {filmCard, comments, moreLikeThis};
  }
);

export const postReview = createAsyncThunk<void, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  '/comments/:id',
  async ({comment, rating, id}, {extra: api}) => {
    await api.post<ReviewCommentResponse>(ApiPaths.Comments(id), {comment, rating})
      .then(() => browserHistory.push(Paths.MoviePage(id)));
  }
);

export const postFavorite = createAsyncThunk<FilmCard, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  '/favorite/setStatus',
  async ({status, id}, {extra: api}) => await api.post<FilmCard>(ApiPaths.SetFilmStatus(id, status)).then((res) => res.data)
);
