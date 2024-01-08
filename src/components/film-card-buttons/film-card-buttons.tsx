import {Link} from 'react-router-dom';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getAuthorizationStatus} from '@store/user/selections.ts';
import {Paths} from '@const/paths.ts';
import {getMyListCount} from '@store/film/selections.ts';

type FilmCardButtonsProps = {
  id: string;
}

function FilmCardButtons({id}: FilmCardButtonsProps) {
  const auth = useAppSelector(getAuthorizationStatus);
  const count = useAppSelector(getMyListCount);
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      {auth && (
        <>
          <button className="btn btn--list film-card__button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{count}</span>
          </button>
          <Link to={Paths.AddReview(id)} className="btn film-card__button">Add review</Link>
        </>
      )}
    </div>
  );
}

export default FilmCardButtons;
