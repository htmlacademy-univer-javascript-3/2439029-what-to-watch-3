import {Film} from 'types/film.ts';
import FooterLight from '@components/footer/footer-light.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';

type MyListProps = {
  myFilms: Film[];
}

export function MyList({myFilms}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserPage/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmCardList films={myFilms}/>
        </div>
      </section>
      <FooterLight/>
    </div>
  );
}

export default MyList;
