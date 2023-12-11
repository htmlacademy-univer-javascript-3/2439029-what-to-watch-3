import {CatalogGenre} from 'types/genre.ts';
import {useEffect} from 'react';
import {changeGenre, setGenres} from '@store/action.ts';
import GenreItem from './genre-item';
import {useAppSelector, useAppDispatch} from '@components/use-app/use-app.tsx';

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
