import {PromoFilm} from 'types/film.ts';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getAuthorizationStatus} from '@store/user/selections.ts';
import MyListButton from '@components/buttons/my-list.tsx';
import {PATHS} from '@const/paths.ts';
import {Link} from 'react-router-dom';

type PromoFilmProps = {
  promoFilm: PromoFilm | null;
}

function PromoFilmInfo({promoFilm}: PromoFilmProps) {
  const auth = useAppSelector(getAuthorizationStatus);
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoFilm?.genre}</span>
            <span className="film-card__year">{promoFilm?.released}</span>
          </p>

          <div className="film-card__buttons">
            <Link to={PATHS.Player(String(promoFilm?.id))} className="btn btn--play film-card__button" type="button">
              <svg viewBox={`0 0 ${19} ${19}`}>
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            {auth && promoFilm &&
              <MyListButton id={promoFilm.id} isFavorite={promoFilm.isFavorite}></MyListButton>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoFilmInfo;
