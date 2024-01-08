import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import {AddReviewForm} from '@components/review/add-review-form.tsx';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {getFilm} from '@api/api-action.ts';
import {getFilmData} from '@store/film/selections.ts';
import {Paths} from '@const/paths.ts';

function AddReview() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getFilm(id));
    }
  }, [dispatch, id]);

  const film = useAppSelector(getFilmData);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film!.backgroundImage} alt={film!.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={Paths.MoviePage(film!.id)} className="breadcrumbs__link">{film!.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserPage/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film!.posterImage} alt={film!.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>
    </section>
  );
}

export default AddReview;
