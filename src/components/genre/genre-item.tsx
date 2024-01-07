import {CatalogGenre} from 'types/genre.ts';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getGenre} from '@store/film/selections.ts';

type GenreItemProps = {
  genre: CatalogGenre;
  onClick: (genre: CatalogGenre) => void;
};

export default function GenreItem({genre, onClick}: GenreItemProps): JSX.Element {
  const currentGenre = useAppSelector(getGenre);

  return (
    <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`} onClick={() => onClick(genre)}>
      <a className="catalog__genres-link" href="#">{genre}</a>
    </li>
  );
}
