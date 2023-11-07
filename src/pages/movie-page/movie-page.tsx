import Footer from '@components/footer/footer.tsx';
import {Film} from 'types/film.ts';
import FilmDescription from '@components/ciurrent-film/film-description.tsx';
import SmallFilmCardLink from '@components/small-film-card/small-film-card-link.tsx';
import FilmCardButtons from '@components/film-card-buttons/film-card-buttons.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';

function MoviePage(currentFilm: Film) {
  return (
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
              <FilmCardButtons/>
            </div>
          </div>
        </div>
        <FilmDescription {...currentFilm}/>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <SmallFilmCardLink title={'Fantastic Beasts: The Crimes of Grindelwald'}
              img={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
            />
            <SmallFilmCardLink title={'Bohemian Rhapsody'} img={'img/bohemian-rhapsody.jpg'}/>
            <SmallFilmCardLink title={'Macbeth'} img={'img/macbeth.jpg'}/>
            <SmallFilmCardLink title={'Aviator'} img={'img/aviator.jpg'}/>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
