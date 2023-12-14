import {FilmCard} from 'types/film.ts';
import FilmNav from '@components/ciurrent-film/film-nav.tsx';

type FilmDescriptionProps ={
  film: FilmCard;
  children: JSX.Element;
}

function FilmDescription({film,children}: FilmDescriptionProps) {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
        <div className="film-card__desc">
          <FilmNav id={film.id}/>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FilmDescription;
