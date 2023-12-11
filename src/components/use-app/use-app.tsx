import {store} from 'store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type State = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
