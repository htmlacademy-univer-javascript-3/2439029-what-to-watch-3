import Logo from '@components/header/logo.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {FormEvent, useEffect, useRef} from 'react';
import {login} from '@api/api-action.ts';
import {getUserError} from '@store/user/selections.ts';
import {setUserError} from '@store/user/process.ts';
import {TIMEOUT_SHOW_ERROR} from '@const/values.ts';
import FooterLight from '@components/footer/footer-light.tsx';

function SignIn() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getUserError);

  useEffect(() => {

    if (error !== null) {
      const timerId = setTimeout(() => {
        dispatch(setUserError(null));
      }, TIMEOUT_SHOW_ERROR);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [error, dispatch]);


  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginRef.current && passwordRef.current && loginRef.current?.value !== '' && passwordRef.current?.value !== '') {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    } else {
      dispatch(setUserError('All fields must be filled in ;)'));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={submit}>
          {error !== null ?
            <div className="sign-in__message">
              <p>{error}</p>
            </div> : ''}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <FooterLight/>
    </div>
  );
}

export default SignIn;
