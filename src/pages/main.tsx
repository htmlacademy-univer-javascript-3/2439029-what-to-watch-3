import Footer from '@components/footer/footer.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';
import GenreList from '@components/genre/genre-list';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import ShowMore from '@components/buttons/show-more.tsx';
import Spinner from '@components/spinner/spinner.tsx';
import PromoFilmInfo from '@components/main-page/promo-film-info.tsx';

type MainPageProps = {
  myListCount: number;
}

function MainPage(props: MainPageProps) {
  const count = useAppSelector((state) => state.count);
  const films = useAppSelector((state) => state.filteredFilms);
  const promoFilm = useAppSelector((state) => state.promoFilm);
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
        <PromoFilmInfo promoFilm={promoFilm} myListCount={props.myListCount}/>
      </section>

      <div className="page-content">
        {films.length === 0 ? <Spinner/> :
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreList />
            <div className="catalog__films-list">
              <FilmCardList films={films.slice(0,count)}/>
            </div>
            {count < films.length && <ShowMore/>}
          </section>}
        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
