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
import {films} from '@mocks/films.ts';

type AppProps ={
  films:Film[];
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage currentFilm={films[0]} otherFilms={films.slice(1)} myListCount={9}/>}/>
        <Route path={'/mylist'} element={<PrivateRoute isAuthorize={false}><MyList/></PrivateRoute>}/>
        <Route path={'/login'} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
        <Route path={'/films/:id'} element={<MoviePage films={films} count={9}/>}/>
        <Route path={'/films/:id/review'} element={<AddReview {...props.films[0]}/>}/>
        <Route path={'/player/:id'} element={<Player/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
