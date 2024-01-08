import FooterLight from '@components/footer/footer-light.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {getMyList, myListLoading} from '@store/film/selections.ts';
import Spinner from '@components/spinner/spinner.tsx';
import {fetchMyList} from '@api/api-action.ts';

export function MyList() {
  const myList = useAppSelector(getMyList);
  const loading = useAppSelector(myListLoading);
  const dispatch = useAppDispatch();
  dispatch(fetchMyList);
  return (
    loading ? <Spinner/>
      :
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <UserPage/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">
            <FilmCardList films={myList}/>
          </div>
        </section>
        <FooterLight/>
      </div>
  );
}

export default MyList;
