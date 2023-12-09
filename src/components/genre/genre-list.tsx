import {CatalogGenre} from 'types/genre.ts';
import {useEffect} from 'react';
import {changeGenre, takeFilms, setGenres} from '../../store/action.ts';
import GenreItem from './genre-item';
import {useDispatch} from 'react-redux';
import {store} from '@store/index.ts';
import {useAppSelector} from './genre-item.tsx';


type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export default function GenreList() {
  const {allFilms, genres} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newGenres = new Set<CatalogGenre>(['All genres']);
    allFilms.forEach((film) => newGenres.add(film.genre));
    dispatch(setGenres(Array.from(newGenres)));
  }, [dispatch, allFilms]);

  const handleGenreClick = (genre: CatalogGenre) => {
    dispatch(changeGenre(genre));
    dispatch(takeFilms());
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres)
        .map((genre) => (
          <GenreItem genre={genre} onClick={handleGenreClick} key={genre} />
        ))}
    </ul>
  );
}
