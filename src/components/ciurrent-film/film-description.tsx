import {Film} from 'types/film.ts';
import FilmNav from '@components/ciurrent-film/film-nav.tsx';

type FilmDescriptionProps ={
  film: Film;
  children: JSX.Element;
}

function FilmDescription(props: FilmDescriptionProps) {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={props.film.posterImg} alt={props.film.title} width="218" height="327"/>
        </div>
        <div className="film-card__desc">
          <FilmNav id={props.film.id}/>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default FilmDescription;
