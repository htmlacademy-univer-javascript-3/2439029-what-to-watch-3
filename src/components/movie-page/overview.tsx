import FilmRating from '@components/ciurrent-film/film-rating.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import {useAppSelector, useAppDispatch} from '@components/use-app/use-app.tsx';
import {getFilmData} from '@store/film/selections.ts';
import {setSection} from '@store/film/process.ts';

function Overview() {
  const dispatch = useAppDispatch();
  dispatch(setSection('Overview'));
  const film = useAppSelector(getFilmData);

  return film ? (
    <>
      <FilmRating {...film}/>

      <div className="film-card__text">
        {film.description}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  ) : (
    <NotFound/>
  );
}

export default Overview;
