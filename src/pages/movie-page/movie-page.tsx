import Footer from '@components/footer/footer.tsx';
import {Film} from 'types/film.ts';
import FilmDescription from '@components/ciurrent-film/film-description.tsx';
import SmallFilmCardList from '@components/small-film-card/small-film-card-list.tsx';
import FilmCardButtons from '@components/film-card-buttons/film-card-buttons.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import NotFound from '@pages/not-found/not-found.tsx';

type MoviePageProps = {
  films: Film[];
  count: number;
}

function MoviePage(props: MoviePageProps) {
  const currentId = 1;
  const currentFilm = props.films.find((f) => f.id === currentId);
  return currentFilm ? (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.img} alt={currentFilm.title}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header user-page__head">
            <Logo/>
            <UserPage/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.date}</span>
              </p>
              <FilmCardButtons count={props.count}/>
            </div>
          </div>
        </div>
        <FilmDescription {...currentFilm}/>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <SmallFilmCardList films={props.films.filter((f) => f.id !== currentId).slice(0, 4)}/>
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
