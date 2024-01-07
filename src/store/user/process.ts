import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '@const/namespaces.ts';
import {checkAuth, login, logout} from '@api/api-action.ts';
import {dropToken, saveToken} from '@components/use-app/use-app.tsx';
import {processErrorHandle} from '@api/errors.ts';
import browserHistory from '../../browser-history.ts';
import {Paths} from '@const/paths.ts';

export type UserProcess = {
  authorizationStatus: boolean;
  image: string;
};
const initialState: UserProcess = {
  authorizationStatus: false,
  image: 'img/avatar.jpg',
};
export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = true;
        state.image = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        const userData = action.payload;
        saveToken(userData.token);
        state.authorizationStatus = true;
        state.image = userData.avatarUrl;
        browserHistory.push(Paths.Main());
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = false;
        processErrorHandle('Fill the fields with valid values!');
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = false;
        dropToken();
      });
  }
});
