import {Film} from 'types/film.ts';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import Review from '@components/review/review.tsx';
import NotFound from '@pages/not-found/not-found.tsx';

type AddReviewProps = {
  films:Film[];
}

function AddReview({films}: AddReviewProps) {
  const currentId = 1;
  const currentFilm = films.find((f) => f.id === currentId);
  return currentFilm?(
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
          <img src={currentFilm.posterImg} alt={currentFilm.title} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <Review/>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
      ;

    </section>
  ) : (
    <NotFound/>
  );
}

export default AddReview;
