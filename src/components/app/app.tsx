import MainPage from '../../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import MyList from '@pages/my-list/my-list.tsx';
import SignIn from '@pages/sign-in/sign-in.tsx';
import MoviePage from '@pages/movie-page/movie-page.tsx';
import Player from '@pages/player/player.tsx';
import AddReview from '@pages/add-review/add-review.tsx';
import {Film} from 'types/film.ts';
import PrivateRoute from '@pages/private-route/private-route.tsx';
import ScrollToTop from '@components/scroll-to-top.tsx';
import {Paths} from '../../const/paths.ts';
import Overview from '@components/movie-page/overview.tsx';

type AppProps ={
  films:Film[];
}

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={Paths.Main} element={<MainPage currentFilm={films[0]} otherFilms={films.slice(1)} myListCount={9}/>}/>
        <Route path={Paths.MyList} element={<PrivateRoute isAuthorize={false}><MyList myFilms={films.slice(1,9)}/></PrivateRoute>}/>
        <Route path={Paths.SignIn} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
        <Route path={Paths.MoviePage} element={<MoviePage films={films} count={9}><Overview films = {films}/></MoviePage>}/>
        <Route path={Paths.AddReview} element={<AddReview films={films}/>}/>
        <Route path={Paths.Player} element={<Player films={films}/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
