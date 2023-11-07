import {Film} from 'types/film.ts';
import FilmNav from '@components/ciurrent-film/film-nav.tsx';
import FilmRating from '@components/ciurrent-film/film-rating.tsx';

function FilmDescription(props: Film) {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={props.poster_img} alt={props.title} width="218" height="327"/>
        </div>
        <div className="film-card__desc">
          <FilmNav/>
          <FilmRating {...props.rating}/>

          <div className="film-card__text">
            {props.text.map((t) => (<p>{t}</p>))}
            <p className="film-card__director"><strong>{props.director}</strong></p>

            <p className="film-card__starring">
              <strong>{props.starring}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDescription;
