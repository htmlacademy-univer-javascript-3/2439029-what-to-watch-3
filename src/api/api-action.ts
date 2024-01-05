import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiPaths, Paths} from '@const/paths.ts';
import {Film, FilmCard, PromoFilm} from 'types/film.ts';
import {
  getFilms,
  getPromoFilm,
  redirectToRoute,
  setAuthorization,
  setFilm,
  setImage,
  setReviews,
  setSimilarFilms
} from '@store/action.ts';
import {AppDispatch, dropToken, saveToken, State} from '@components/use-app/use-app.tsx';
import {AuthData, UserData} from 'types/request/post-user-request.ts';
import {processErrorHandle} from '@api/errors.ts';
import {ReviewType} from 'types/review.ts';
import {ReviewComment, ReviewCommentResponse} from 'types/request/post-comment-request.ts';

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
      dispatch(redirectToRoute(Paths.Main));
    } catch {
      processErrorHandle('Fill the fields with valid values!');
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

export const getFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/:id',
  async (id, {dispatch, extra: api}) => {
    const film = await api.get<FilmCard>(`${ApiPaths.Films}/${id}`)
      .then((res) => res.data)
      .catch(() => {
        dispatch(redirectToRoute(Paths.NotFound));
        return null;
      });
    dispatch(setFilm(film));
  },
);

export const getSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/:id',
  async (id, {dispatch, extra: api}) => {
    const films = await api.get<Film[]>(`${ApiPaths.Films}/${id}/similar`)
      .then((res) => res.data).catch(() => []);
    dispatch(setSimilarFilms(films));
  },
);

export const getReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/:id',
  async (id, {dispatch, extra: api}) => {
    const films = await api.get<ReviewType[]>(`${ApiPaths.Comments}/${id}`)
      .then((res) => res.data).catch(() => []);
    dispatch(setReviews(films));
  },
);

export const postReview = createAsyncThunk<void, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  '/comments/:id',
  async ({comment, rating, id}, {dispatch, extra: api}) => {

    await api.post<ReviewCommentResponse>(`${ApiPaths.Comments}/${id}`, {comment, rating})
      .then(() => dispatch(redirectToRoute(Paths.MoviePage.replace(':id', id))))
      .catch(() => processErrorHandle('Fill the fields with valid values!'));
  },
);
