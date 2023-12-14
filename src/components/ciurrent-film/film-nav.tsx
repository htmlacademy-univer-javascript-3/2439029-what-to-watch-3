import {Link} from 'react-router-dom';

type FilmNavProps = {
  id:string;
}

function FilmNav({id}:FilmNavProps) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to={`/films/${id}/details`} className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to={`/films/${id}/review`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmNav;
