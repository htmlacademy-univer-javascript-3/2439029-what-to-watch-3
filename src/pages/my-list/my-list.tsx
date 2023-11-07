import FilmCard from '@components/film-card/film-card.tsx';
import FooterLight from '@components/footer/footer-light.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';

export function MyList() {
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
          <FilmCard title={'Fantastic Beasts: The Crimes of Grindelwald'} img={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
          <FilmCard title={'Bohemian Rhapsody'} img={'img/bohemian-rhapsody.jpg'}/>
          <FilmCard title={'Macbeth'} img={'img/macbeth.jpg'}/>
          <FilmCard title={'Aviator'} img={'img/aviator.jpg'}/>
          <FilmCard title={'We need to talk about Kevin'} img={'img/we-need-to-talk-about-kevin.jpg'}/>
          <FilmCard title={'Revenant'} img={'img/revenant.jpg'}/>
          <FilmCard title={'Johnny English'} img={'img/johnny-english.jpg'}/>
          <FilmCard title={'Shutter Island'} img={'img/shutter-island.jpg'}/>
        </div>
      </section>
      <FooterLight/>
    </div>
  );
}

export default MyList;
