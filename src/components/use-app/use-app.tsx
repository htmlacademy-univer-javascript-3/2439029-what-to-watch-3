import {store} from 'store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

type State = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
