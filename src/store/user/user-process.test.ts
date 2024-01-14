import {checkAuth, login, logout} from '@api/api-action.ts';
import {setUserError, userProcess} from '@store/user/process.ts';
import {expect} from 'vitest';
import {UserData} from 'types/request/post-user-request.ts';

describe('UserProcess Slice', () => {
  const userData: UserData = {
    name: 'Oliver.conner',
    avatarUrl: 'https://url-to-image/image.jpg',
    email: 'Oliver.conner@gmail.com',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  };

  it('should return initial state with auth', () => {
    const emptyAction = {type: ''};
    const expectedState = {authorizationStatus: true, userImage: 'test_image', error: 'test_error'};

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with no auth', () => {
    const emptyAction = {type: ''};
    const expectedState = {authorizationStatus: false, userImage: null, error: null};

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set auth = true with "checkAuth.fulfilled" action', () => {
    const initialState = {authorizationStatus: false, userImage: null, error: null};
    const expectedState = {authorizationStatus: true, userImage: 'https://url-to-image/image.jpg', error: null};

    const result = userProcess.reducer(initialState, checkAuth.fulfilled(userData.avatarUrl, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set auth = false with "checkAuth.rejected" action', () => {
    const initialState = {authorizationStatus: true, userImage: 'test_img', error: null};
    const expectedState = {authorizationStatus: false, userImage: null, error: null};

    const result = userProcess.reducer(initialState, checkAuth.rejected);

    expect(result).toEqual(expectedState);
  });
  it('should set "NoAuth" with "login.rejected" action', () => {
    const initialState = {authorizationStatus: true, userImage: 'test_img', error: null};
    const expectedState = {authorizationStatus: false, userImage: null, error: 'Failed to register, please check if your email and password are correct!'};

    const result = userProcess.reducer(initialState, login.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set false, with "logout.fulfilled" action', () => {
    const initialState = {authorizationStatus: true, userImage: 'test_img', error: null};
    const expectedState = {authorizationStatus: false, userImage: null, error: null};

    const result = userProcess.reducer(initialState, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });
  it('should set true, with "login.fulfilled" action', () => {
    const initialState = {authorizationStatus: false, userImage: null, error: null};
    const expectedState = {authorizationStatus: true, userImage: 'https://url-to-image/image.jpg', error: null};
    const result = userProcess.reducer(initialState, login.fulfilled(userData, '', {email: '', password: ''}));

    expect(result).toEqual(expectedState);
  });
  it('should set error', () => {
    const result = userProcess.reducer(undefined, setUserError('Fill the fields with valid values!'));

    expect(result.error).toEqual('Fill the fields with valid values!');
  });
});
