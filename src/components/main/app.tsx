import MainPage from '../../pages/main.tsx';

type AppProps = {
  name: string;
  genre: string;
  date: number;
  img: string;
};

function App(props: AppProps): JSX.Element {
  return <MainPage {...props} />;
}

export default App;
