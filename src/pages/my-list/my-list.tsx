import SmallFilmCard from '@components/small-film-card/small-film-card.tsx';
import Header from '@components/header/header.tsx';
import FooterLight from '@components/footer/footer-light.tsx';

export function MyList() {
  return (
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <SmallFilmCard title={'Fantastic Beasts: The Crimes of Grindelwald'} img={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
          <SmallFilmCard title={'Bohemian Rhapsody'} img={'img/bohemian-rhapsody.jpg'}/>
          <SmallFilmCard title={'Macbeth'} img={'img/macbeth.jpg'}/>
          <SmallFilmCard title={'Aviator'} img={'img/aviator.jpg'}/>
          <SmallFilmCard title={'We need to talk about Kevin'} img={'img/we-need-to-talk-about-kevin.jpg'}/>
          <SmallFilmCard title={'Revenant'} img={'img/revenant.jpg'}/>
          <SmallFilmCard title={'Johnny English'} img={'img/johnny-english.jpg'}/>
          <SmallFilmCard title={'Shutter Island'} img={'img/shutter-island.jpg'}/>
        </div>
      </section>
      <FooterLight/>
    </div>
  );
}

export default MyList;
