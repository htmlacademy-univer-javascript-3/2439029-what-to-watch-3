import {store} from 'store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type State = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


const authToken = 'auth';

export type Token = string | null;

export const getToken = (): Token => localStorage.getItem(authToken);

export const saveToken = (token: Token): void => localStorage.setItem(authToken, token ?? '');
export const dropToken = (): void => localStorage.removeItem(authToken);

