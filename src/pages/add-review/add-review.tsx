import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import {AddReviewForm} from '@components/review/add-review-form.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "@components/use-app/use-app.tsx";
import {getFilm, getReviews, getSimilarFilms} from "@api/api-action.ts";

function AddReview() {
  const [, setFilmRating] = useState(0);

  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getFilm(id));
      dispatch(getSimilarFilms(id));
      dispatch(getReviews(id));
    }
  }, [id]);

  const film = useAppSelector((state) => state.film);

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserPage/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm onAnswer={(rating) => setFilmRating(rating)}/>
      </div>
    </section>
  ) : (
    <NotFound/>
  );
}

export default AddReview;
