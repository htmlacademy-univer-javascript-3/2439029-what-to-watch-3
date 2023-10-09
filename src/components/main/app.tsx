import MainPage from '../../pages/main.tsx';

type AppProps = {
  name: string;
  genre: string;
  date: number;
  img: string;
};

function App(props: AppProps): JSX.Element {
  return <MainPage name={props.name} date ={props.date} genre={props.genre} img={props.img} />;
}

export default App;