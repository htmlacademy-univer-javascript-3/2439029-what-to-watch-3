import {FilmCard} from "types/film.ts";

function FilmRating(film: FilmCard) {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span
          className="film-rating__level">{film.rating <= 3 ? 'Bad' : film.rating <= 5 ? 'Normal' : film.rating <= 8 ?
          'Good' : film.rating < 10 ? 'Very Good' : 'Awesome'}</span>
        <span className="film-rating__count">{film.scoresCount} raitings</span>
      </p>
    </div>
  );
}

export default FilmRating;
