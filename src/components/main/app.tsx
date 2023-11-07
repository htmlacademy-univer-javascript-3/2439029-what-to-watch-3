import MainPage from '../../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import MyList from '@pages/my-list/my-list.tsx';
import SignIn from '@pages/sign-in/sign-in.tsx';
import MoviePage from '@pages/movie-page/movie-page.tsx';
import Player from '@pages/player/player.tsx';
import AddReview from '@pages/add-review/add-review.tsx';
import {Film} from 'types/film.ts';
import {CurrentFilm} from 'types/current-film.ts';

function App(props: Film): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage {...props} />}/>
        <Route path={'/mylist'} element={<MyList/>}/>
        <Route path={'/login'} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
        <Route path={'/films/:id'} element={<MoviePage {...CurrentFilm}/>}/>
        <Route path={'/films/:id/review'} element={<AddReview/>}/>
        <Route path={'/player/:id'} element={<Player/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
