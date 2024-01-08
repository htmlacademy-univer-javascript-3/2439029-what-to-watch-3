import {describe, expect} from 'vitest';
import {NameSpace} from '@const/namespaces.ts';
import {getAuthorizationStatus, getUserError, getUserImage} from '@store/user/selections.ts';

describe('UserSlice selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: true,
      userImage: '/some/path/to/image.png',
      error: 'test_error'
    },
  };
  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });
  it('should return user image from state', () => {
    const { userImage } = state[NameSpace.User];
    const result = getUserImage(state);
    expect(result).toBe(userImage);
  });
  it('should return error from state', () => {
    const { error } = state[NameSpace.User];
    const result = getUserError(state);
    expect(result).toBe(error);
  });
});
