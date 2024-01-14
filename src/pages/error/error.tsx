import styles from './error.module.css';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {fetchFilmsAction, fetchMyList, fetchPromoFilmAction, getFilm} from '@api/api-action.ts';
import {getHasFilmError, getHasFilmsError, getHasMyListError, getHasPromoFilmError} from '@store/film/selections.ts';

type ErrorProps = {
  id?: string;
};

function Error({id}: ErrorProps): JSX.Element {
  const dispatch = useAppDispatch();
  const myListError = useAppSelector(getHasMyListError);
  const errorFilms = useAppSelector(getHasFilmsError);
  const errorPromo = useAppSelector(getHasPromoFilmError);
  const errorFilm = useAppSelector(getHasFilmError);
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>500</h1>
      <h2 className={styles.info}>Failed to load {errorFilms || errorPromo || errorFilm ? 'movies' : 'my list'}</h2>
      <div className={styles.info}>Technical chocolates appeared...
      </div>
      <div className={styles.button}>
        <button
          className="sign-in__btn"
          onClick={() => {
            if (id) {
              dispatch(getFilm(id));
            } else {
              if (myListError) {
                dispatch(fetchMyList());
              }
              if (errorFilms) {
                dispatch(fetchFilmsAction());
              }
              if (errorPromo) {
                dispatch(fetchPromoFilmAction());
              }
            }
          }} type="button"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default Error;
