import FilmRating from '@components/ciurrent-film/film-rating.tsx';
import {Film} from 'types/film.ts';
import NotFound from '@pages/not-found/not-found.tsx';
import {useParams} from 'react-router-dom';

type OverviewProps = {
  films: Film[];
}

function Overview(props: OverviewProps) {
  const {id} = useParams<string>();
  const currentId = Number(id);
  const currentFilm = props.films.find((f) => f.id === currentId);
  return currentFilm ? (
    <>
      <FilmRating {...currentFilm.rating}/>

      <div className="film-card__text">
        {currentFilm.text.map((t) => (<p>{t}</p>))}
        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {currentFilm.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  ): (
    <NotFound/>
  );
}

export default Overview;
