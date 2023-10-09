type catalogGenres = {
    name: 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thrillers'|'Comedy' | 'Crime' | 'Documentary' | 'Dramas' | 'Horror' ;
  }

function CatalogGenres({name}:catalogGenres){
  return(
    <li className="catalog__genres-item">
      <a href="#"className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default CatalogGenres;