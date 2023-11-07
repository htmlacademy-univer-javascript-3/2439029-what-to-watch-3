import {Film} from 'types/film.ts';
import {Link} from 'react-router-dom';

function SmallFilmCardLink(props: Film) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.img} alt={props.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={'/film-page'} className="small-film-card__link">{props.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCardLink;
