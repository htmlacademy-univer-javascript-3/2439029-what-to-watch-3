import Footer from '@components/footer/footer.tsx';
import Logo from '@components/header/logo.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {FormEvent, useRef} from 'react';
import {login} from '@api/api-action.ts';
import {processErrorHandle} from "@api/errors.ts";

function SignIn() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.error);

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
      processErrorHandle('All fields must be filled in ;)');
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
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address"
                     name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password"
                     name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default SignIn;
