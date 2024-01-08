import {NameSpace} from '@const/namespaces.ts';
import {State} from '@components/use-app/use-app.tsx';

export const getAuthorizationStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus;
export const getUserImage = (state: State): string => state[NameSpace.User].image;
export const getUserError = (state: State): string | null => state[NameSpace.User].error;

