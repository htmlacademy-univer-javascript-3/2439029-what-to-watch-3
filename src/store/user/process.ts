import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '@const/namespaces.ts';
import {checkAuth, login, logout} from '@api/api-action.ts';
import {dropToken, saveToken} from '@components/use-app/use-app.tsx';
import browserHistory from '../../browser-history.ts';
import {Paths} from '@const/paths.ts';

export type UserProcess = {
  authorizationStatus: boolean;
  userImage: string | null;
  error: string | null;
};
const initialState: UserProcess = {
  authorizationStatus: false,
  userImage: null,
  error: null
};
export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserError(state, action: {
      payload: string | null;
    }) {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = true;
        state.userImage = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = false;
        state.userImage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const userData = action.payload;
        saveToken(userData.token);
        state.authorizationStatus = true;
        state.userImage = userData.avatarUrl;
        state.error = null;
        browserHistory.push(Paths.Main());
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = false;
        state.userImage = null;
        state.error = 'Fill the fields with valid values!';
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = false;
        state.userImage = null;
        dropToken();
      });
  }
});

export const {setUserError} = userProcess.actions;
