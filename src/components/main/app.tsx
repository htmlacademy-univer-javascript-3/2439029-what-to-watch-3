import MainPage from '../../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '@pages/not-found/not-found.tsx';
import MyList from '@pages/my-list/my-list.tsx';
import SignIn from '@pages/sign-in/sign-in.tsx';


type AppProps = {
  name: string;
  genre: string;
  date: number;
  img: string;
};

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage {...props} />}/>
        <Route path={'/mylist'} element={<MyList/>}/>
        <Route path={'/login'} element={<SignIn/>}/>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
