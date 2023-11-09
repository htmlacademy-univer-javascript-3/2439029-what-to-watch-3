import {Film} from 'types/film.ts';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import {AddReviewForm} from '@components/review/add-review-form.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import {useState} from 'react';

type AddReviewProps = {
  films: Film[];
}

function AddReview({films}: AddReviewProps) {
  const [, setFilmRating] = useState(0);
  const currentId = 1;
  const currentFilm = films.find((f) => f.id === currentId);
  return currentFilm ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.img} alt={currentFilm.title}/>
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
          <img src={currentFilm.posterImg} alt={currentFilm.title} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm onAnswer={(rating) => setFilmRating(rating)}/>
      </div>
      ;

    </section>
  ) : (
    <NotFound/>
  );
}

export default AddReview;
