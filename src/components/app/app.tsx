import MainPage from '@pages/main.tsx';
import SignIn from '@pages/sign-in/sign-in.tsx';
import {Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import ScrollToTop from '@components/scroll-to-top.tsx';
import {Paths} from '@const/paths.ts';
import HistoryRouter from "@components/history-route/history-route.tsx";
import browserHistory from "../../browser-history.ts";
import MoviePage from '@pages/movie-page/movie-page.tsx';
import Overview from "@components/movie-page/overview.tsx";
import Details from "@components/movie-page/details.tsx";
import Reviews from "@components/movie-page/reviews.tsx";
import AddReview from "@pages/add-review/add-review.tsx";

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop/>
      <Routes>
        <Route path={Paths.Main} element={<MainPage myListCount={9}/>}/>
        {/*<Route path={Paths.MyList} element={<PrivateRoute isAuthorize={false}><MyList myFilms={films.slice(1,9)}/></PrivateRoute>}/>*/}
        <Route path={Paths.SignIn} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
        <Route path={Paths.MoviePage} element={<MoviePage><Overview/></MoviePage>}/>
        <Route path={Paths.MoviePageDetails} element={<MoviePage><Details/></MoviePage>}/>
        <Route path={Paths.MoviePageReviews} element={<MoviePage><Reviews/></MoviePage>}/>
        <Route path={Paths.AddReview} element={<AddReview/>}/>
        {/*<Route path={Paths.Player} element={<Player films={films}/>}/>*/}
      </Routes>
    </HistoryRouter>);
}

export default App;
