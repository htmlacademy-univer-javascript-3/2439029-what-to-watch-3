import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';
import GenreList from '@components/genre/genre-list';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import ShowMore from '@components/buttons/show-more.tsx';
import Spinner from '@components/spinner/spinner.tsx';
import PromoFilmInfo from '@components/main-page/promo-film-info.tsx';
import {filmsDataLoading, getFilms, getMyListCount, getPromoFilm, getShowFilms} from '@store/film/selections.ts';
import FooterLight from '@components/footer/footer-light.tsx';

function MainPage() {
  const count = useAppSelector(getShowFilms);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const loading = useAppSelector(filmsDataLoading);
  const myListCount = useAppSelector(getMyListCount);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header user-page__head">
          <Logo/>
          <UserPage/>
        </header>
        <PromoFilmInfo promoFilm={promoFilm} myListCount={myListCount}/>
      </section>

      <div className="page-content">
        {loading ? <Spinner/> :
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreList/>
            <div className="catalog__films-list">
              <FilmCardList films={films.slice(0, count)}/>
            </div>
            {count < films.length && <ShowMore/>}
          </section>}
        <FooterLight/>
      </div>
    </>
  );
}

export default MainPage;
