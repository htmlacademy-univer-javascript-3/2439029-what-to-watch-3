import MainPage from '../../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import ScrollToTop from '@components/scroll-to-top.tsx';
import {Paths} from '../../const/paths.ts';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={Paths.Main} element={<MainPage myListCount={9}/>}/>
        {/*<Route path={Paths.MyList} element={<PrivateRoute isAuthorize={false}><MyList myFilms={films.slice(1,9)}/></PrivateRoute>}/>*/}
        {/*<Route path={Paths.SignIn} element={<SignIn/>}/>*/}
        <Route path={'*'} element={<NotFound/>}/>
        {/*<Route path={Paths.MoviePage} element={<MoviePage films={films} count={9}><Overview films = {films}/></MoviePage>}/>*/}
        {/*<Route path={Paths.MoviePageDetails} element={<MoviePage films={films} count={9}><Details films = {films}/></MoviePage>}/>*/}
        {/*<Route path={Paths.AddReview} element={<AddReview films={films}/>}/>*/}
        {/*<Route path={Paths.Player} element={<Player films={films}/>}/>*/}
      </Routes>
    </BrowserRouter>);
}

export default App;
