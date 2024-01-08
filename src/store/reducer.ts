import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '@const/namespaces.ts';
import {FilmProcess} from '@store/film/process.ts';
import {userProcess} from '@store/user/process.ts';

export const reducer = combineReducers({
  [NameSpace.Film]: FilmProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
