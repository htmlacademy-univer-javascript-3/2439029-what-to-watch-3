import MainPage from '@pages/main.tsx';
import SignIn from '@pages/sign-in/sign-in.tsx';
import {Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import ScrollToTop from '@components/scroll-to-top.tsx';
import {PATHS} from '@const/paths.ts';
import HistoryRouter from '@components/history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import MoviePage from '@pages/movie-page/movie-page.tsx';
import Overview from '@components/movie-page/overview.tsx';
import Details from '@components/movie-page/details.tsx';
import Reviews from '@components/movie-page/reviews.tsx';
import AddReview from '@pages/add-review/add-review.tsx';
import PrivateRoute from '@pages/private-route/private-route.tsx';
import MyList from '@pages/my-list/my-list.tsx';
import {PlayerPage} from '@pages/player/player.tsx';


function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop/>
      <Routes>
        <Route path={PATHS.Main()} element={<MainPage/>}/>
        <Route path={PATHS.MyList()} element={<PrivateRoute><MyList/></PrivateRoute>}/>
        <Route path={PATHS.SignIn()} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
        <Route path={PATHS.MoviePage(':id')} element={<MoviePage><Overview/></MoviePage>}/>
        <Route path={PATHS.MoviePageDetails(':id')} element={<MoviePage><Details/></MoviePage>}/>
        <Route path={PATHS.MoviePageReviews(':id')} element={<MoviePage><Reviews/></MoviePage>}/>
        <Route path={PATHS.AddReview(':id')} element={<PrivateRoute><AddReview/></PrivateRoute>}/>
        <Route path={PATHS.Player(':id')} element={<PlayerPage />}/>
      </Routes>
    </HistoryRouter>);
}

export default App;
