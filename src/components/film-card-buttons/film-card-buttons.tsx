import {Link} from 'react-router-dom';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getAuthorizationStatus} from '@store/user/selections.ts';
import {PATHS} from '@const/paths.ts';
import MyListButton from '@components/buttons/my-list.tsx';

type FilmCardButtonsProps = {
  id: string;
  isFavorite: boolean;
}

function FilmCardButtons({id, isFavorite}: FilmCardButtonsProps) {
  const auth = useAppSelector(getAuthorizationStatus);
  return (
    <div className="film-card__buttons">
      <Link to={PATHS.Player(id)} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {auth && (
        <>
          <MyListButton id={id} isFavorite={isFavorite}></MyListButton>
          <Link to={PATHS.AddReview(id)} className="btn film-card__button">Add review</Link>
        </>
      )}
    </div>
  );
}

export default FilmCardButtons;
