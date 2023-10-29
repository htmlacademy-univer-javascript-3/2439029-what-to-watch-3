import {Film} from '../../data/films.ts';
import cn from 'classnames';
import styles from 'small-film-card.module.css';
import {Link} from 'react-router-dom';

function SmallFilmCard(film: Film) {
  return (
    <article className={cn(styles.small_film_card,styles.catalog__films_card)}>
      <div className={styles.small_film_card__image}>
        <img src={film.img} alt="Aviator" width="280" height="175" />
      </div>
      <h3 className="small_film_card__title">
        <Link to={'/film-page'} className={styles.small_film_card__link}>{film.title}</Link>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
