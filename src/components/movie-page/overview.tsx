import FilmRating from '@components/ciurrent-film/film-rating.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import {setSection} from "@store/action.ts";
import {useAppSelector, useAppDispatch} from '@components/use-app/use-app.tsx';

function Overview() {
  const dispatch = useAppDispatch();
  dispatch(setSection('Overview'));
  const film = useAppSelector((state) => state.film);

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
