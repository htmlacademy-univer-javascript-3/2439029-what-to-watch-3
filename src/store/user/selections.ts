import {NameSpace} from '@const/namespaces.ts';
import {State} from '@components/use-app/use-app.tsx';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus;
export const getUserImage = (state: Pick<State, NameSpace.User>): string => state[NameSpace.User].userImage;
export const getUserError = (state: Pick<State, NameSpace.User>): string | null => state[NameSpace.User].error;
