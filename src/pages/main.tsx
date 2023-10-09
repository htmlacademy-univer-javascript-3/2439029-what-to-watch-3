import CatalogGenres from '../components/catalogGenres';
import FilmCard from '../components/filmCard.tsx';

type movie = {
  name: string;
  genre: string;
  date: number;
  img: string;
}

function MainPage({name, date, genre, img}: movie) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
              <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
              </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src='img/avatar.jpg' alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={img} alt={name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
              </p>

              <div className="film-card__buttons">
                <button className='btn btn--play film-card__button' type="button">
                  <svg viewBox={'0 0 '.concat('19'.concat(' '.concat('19')))} width='19' height='19'>
                      <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href={'#'} className="catalog__genres-link">{'All genres'}</a>
            </li>

            <CatalogGenres name={'Crime'}/>
            <CatalogGenres name={'Documentary'}/>
            <CatalogGenres name={'Dramas'}/>
            <CatalogGenres name={'Horror'}/>
            <CatalogGenres name={'Kids & Family'}/>
            <CatalogGenres name={'Romance'}/>
            <CatalogGenres name={'Sci-Fi'}/>
            <CatalogGenres name={'Thrillers'}/>
          </ul>

          <div className="catalog__films-list">
            <FilmCard name={'Fantastic Beasts: The Crimes of Grindelwald'} img={'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <FilmCard name={'Bohemian Rhapsody'} img={'public/img/bohemian-rhapsody.jpg'}/>
            <FilmCard name={'Macbeth'} img={'public/img/macbeth.jpg'}/>
            <FilmCard name={'Aviator'} img={'public/img/aviator.jpg'}/>
            <FilmCard name={'We need to talk about Kevin'} img={'public/img/we-need-to-talk-about-kevin.jpg'}/>
            <FilmCard name={'What We Do in the Shadows'} img={'public/img/what-we-do-in-the-shadows.jpg'}/>
            <FilmCard name={'Revenant'} img={'public/img/revenant.jpg'}/>
            <FilmCard name={'Johnny English'} img={'public/img/johnny-english.jpg'}/>
            <FilmCard name={'Shutter Island'} img={'public/img/shutter-island.jpg'}/>
            <FilmCard name={'Pulp Fiction'} img={'public/img/pulp-fiction.jpg'}/>
            <FilmCard name={'No Country for Old Men'} img={'public/img/no-country-for-old-men.jpg'}/>
            <FilmCard name={'Snatch'} img={'public/img/snatch.jpg'}/>
            <FilmCard name={'Moonrise Kingdom'} img={'public/img/moonrise-kingdom.jpg'}/>
            <FilmCard name={'Seven Years in Tibet'} img={'public/img/seven-years-in-tibet.jpg'}/>
            <FilmCard name={'Midnight Special'} img={'public/img/midnight-special.jpg'}/>
            <FilmCard name={'War of the Worlds'} img={'public/img/war-of-the-worlds.jpg'}/>
            <FilmCard name={'Dardjeeling Limited'} img={'public/img/dardjeeling-limited.jpg'}/>
            <FilmCard name={'Orlando'} img={'public/img/orlando.jpg'}/>
            <FilmCard name={'Mindhunter'} img={'public/img/mindhunter.jpg'}/>
            <FilmCard name={'Midnight Special'} img={'public/img/midnight-special.jpg'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
      <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
      </div>
          <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;