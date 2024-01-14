import FooterLight from '@components/footer/footer-light.tsx';
import Logo from '@components/header/logo.tsx';
import UserPage from '@components/header/user-page.tsx';
import FilmCardList from '@components/film-card/film-card-list.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {getHasMyListError, getMyList, myListLoading} from '@store/film/selections.ts';
import Spinner from '@components/spinner/spinner.tsx';
import Error from '@pages/error/error.tsx';
import {fetchMyList} from '@api/api-action.ts';
import {useEffect} from 'react';

export function MyList() {
  const myList = useAppSelector(getMyList);
  const loading = useAppSelector(myListLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMyList());
  }, [dispatch]);
  const error = useAppSelector(getHasMyListError);
  if (error) {
    return (<Error/>);
  }
  return (
    loading ? <Spinner/>
      :
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">
            My list<span className="user-page__film-count">{myList.length}</span>
          </h1>
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
