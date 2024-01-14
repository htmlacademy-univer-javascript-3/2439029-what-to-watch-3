import styles from './error.module.css';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {fetchMyList, getFilm} from '@api/api-action.ts';
import {getHasMyListError} from '@store/film/selections.ts';

type ErrorProps = {
  id?: string;
};

function Error({id}: ErrorProps): JSX.Element {
  const dispatch = useAppDispatch();
  const myListError = useAppSelector(getHasMyListError);
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>500</h1>
      <h2 className={styles.info}>Failed to load {myListError ? 'my list' : 'movie'}</h2>
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
            }
          }}
          type="button"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default Error;
