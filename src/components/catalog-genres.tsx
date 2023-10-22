export type CatalogGenre =
  'Kids & Family'
  | 'Romance'
  | 'Sci-Fi'
  | 'Thrillers'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Dramas'
  | 'Horror'

type CatalogGenresProps = {
  name: CatalogGenre;
}

function CatalogGenres({name}: CatalogGenresProps) {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default CatalogGenres;
