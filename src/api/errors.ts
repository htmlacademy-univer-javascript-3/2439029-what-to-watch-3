import {createAsyncThunk} from '@reduxjs/toolkit';
import {store} from '@store/index.ts';
import {setError} from '@store/action.ts';
import {TIMEOUT_SHOW_ERROR} from '@const/values.ts';

export const clearErrorAction = createAsyncThunk(
  'login/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
