import {Link} from 'react-router-dom';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getSection} from '@store/film/selections.ts';

type FilmNavProps = {
  id:string;
}

function FilmNav({id}:FilmNavProps) {
  const section = useAppSelector(getSection);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${section === 'Overview' ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${section === 'Details' ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${section === 'Reviews' ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}/reviews`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmNav;
