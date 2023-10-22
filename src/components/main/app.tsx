import MainPage from '../../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';


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
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>);
}

export default App;
