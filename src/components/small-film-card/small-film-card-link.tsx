import {Film} from 'types/film.ts';
import {Link} from 'react-router-dom';

type SmallFilmCardLinkProps = {
  film: Film;
}
function SmallFilmCardLink({film}: SmallFilmCardLinkProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.img} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCardLink;
