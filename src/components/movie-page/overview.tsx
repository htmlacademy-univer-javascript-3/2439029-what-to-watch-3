import FilmRating from '@components/ciurrent-film/film-rating.tsx';
import {Film} from 'types/film.ts';
import NotFound from '@pages/not-found/not-found.tsx';

type OverviewProps = {
  films: Film[];
}

function Overview(props: OverviewProps) {
  const currentId = 1;
  const currentFilm = props.films.find((f) => f.id === currentId);
  return currentFilm ? (
    <>
      <FilmRating {...currentFilm.rating}/>

      <div className="film-card__text">
        {currentFilm.text.map((t) => (<p>{t}</p>))}
        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {currentFilm.starring}</strong>
        </p>
      </div>
    </>
  ): (
    <NotFound/>
  );
}

export default Overview;
