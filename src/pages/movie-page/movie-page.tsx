import Footer from '@components/footer/footer.tsx';
import FilmDescription from '@components/ciurrent-film/film-description.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';
import FilmCardButtons from '@components/film-card-buttons/film-card-buttons.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import NotFound from '@pages/not-found/not-found.tsx';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "@components/use-app/use-app.tsx";
import {useEffect} from "react";
import {getFilm, getSimilarFilms} from "@api/api-action.ts";

type MoviePageProps = {
  children: JSX.Element;
}

function MoviePage(props: MoviePageProps) {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getFilm(id));
      dispatch(getSimilarFilms(id));
      //dispatch(fetchCommentsMovie(id));
    }
  }, [id]);

  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);

  return film ? (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header user-page__head">
            <Logo/>
            <UserPage/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <FilmCardButtons id={film.id}/>
            </div>
          </div>
        </div>
        <FilmDescription film={film}>{props.children}</FilmDescription>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmCardList films={similarFilms}/>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  ) : (
    <NotFound/>
  );
}

export default MoviePage;
