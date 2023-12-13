import Footer from '@components/footer/footer.tsx';
import Logo from '@components/header/logo.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {useNavigate} from 'react-router-dom';
import {FormEventHandler, useRef} from 'react';
import {login} from '@api/api-action.ts';
import {setError} from '@store/action.ts';

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.error);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submit: FormEventHandler = (event) => {
    event.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch(login({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate('/');
    } else {
      setError('Необходимо заполнить все поля');
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

      <Footer/>
    </div>
  );
}

export default SignIn;
