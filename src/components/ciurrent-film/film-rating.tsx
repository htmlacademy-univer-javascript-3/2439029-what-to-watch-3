import {FilmCard} from 'types/film.ts';

function FilmRating(film: FilmCard) {
  let ratingText;
  if (film.rating <= 3) {
    ratingText = 'Bad';
  } else if (film.rating <= 5) {
    ratingText = 'Normal';
  } else if (film.rating <= 8) {
    ratingText = 'Good';
  } else if (film.rating < 10) {
    ratingText = 'Very Good';
  } else {
    ratingText = 'Awesome';
  }
  return (
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingText}</span>
        <span className="film-rating__count">{film.scoresCount} raitings</span>
      </p>
    </div>
  );
}

export default FilmRating;
