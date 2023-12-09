import {CatalogGenre} from 'types/genre.ts';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {store} from 'store';

type State = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

type GenreItemProps = {
  genre: CatalogGenre;
  onClick: (genre: CatalogGenre) => void;
};

export default function GenreItem({genre, onClick}: GenreItemProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.genre);

  return (
    <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`} onClick={() => onClick(genre)}>
      <a className="catalog__genres-link" href="#">{genre}</a>
    </li>
  );
}
