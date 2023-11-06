import CatalogGenres from '@components/catalog-genres.tsx';
import FilmCard from '@components//film-card.tsx';
import Footer from '@components/footer/footer.tsx';
import Header from '@components/header/header.tsx';

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

        <Header/>

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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox={`0 0 ${19} ${19}`}>
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
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
            <FilmCard title={'Fantastic Beasts: The Crimes of Grindelwald'} img={'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <FilmCard title={'Bohemian Rhapsody'} img={'public/img/bohemian-rhapsody.jpg'}/>
            <FilmCard title={'Macbeth'} img={'public/img/macbeth.jpg'}/>
            <FilmCard title={'Aviator'} img={'public/img/aviator.jpg'}/>
            <FilmCard title={'We need to talk about Kevin'} img={'public/img/we-need-to-talk-about-kevin.jpg'}/>
            <FilmCard title={'What We Do in the Shadows'} img={'public/img/what-we-do-in-the-shadows.jpg'}/>
            <FilmCard title={'Revenant'} img={'public/img/revenant.jpg'}/>
            <FilmCard title={'Johnny English'} img={'public/img/johnny-english.jpg'}/>
            <FilmCard title={'Shutter Island'} img={'public/img/shutter-island.jpg'}/>
            <FilmCard title={'Pulp Fiction'} img={'public/img/pulp-fiction.jpg'}/>
            <FilmCard title={'No Country for Old Men'} img={'public/img/no-country-for-old-men.jpg'}/>
            <FilmCard title={'Snatch'} img={'public/img/snatch.jpg'}/>
            <FilmCard title={'Moonrise Kingdom'} img={'public/img/moonrise-kingdom.jpg'}/>
            <FilmCard title={'Seven Years in Tibet'} img={'public/img/seven-years-in-tibet.jpg'}/>
            <FilmCard title={'Midnight Special'} img={'public/img/midnight-special.jpg'}/>
            <FilmCard title={'War of the Worlds'} img={'public/img/war-of-the-worlds.jpg'}/>
            <FilmCard title={'Dardjeeling Limited'} img={'public/img/dardjeeling-limited.jpg'}/>
            <FilmCard title={'Orlando'} img={'public/img/orlando.jpg'}/>
            <FilmCard title={'Mindhunter'} img={'public/img/mindhunter.jpg'}/>
            <FilmCard title={'Midnight Special'} img={'public/img/midnight-special.jpg'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
