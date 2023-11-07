import {Film} from 'types/film.ts';
import cn from 'classnames';
import styles from './small-film-card.module.css';
import {Link} from 'react-router-dom';

function SmallFilmCard({title, img}: Film) {
  return (
    <article className={cn(styles.small_film_card, styles.catalog__films_card)}>
      <div className={styles.small_film_card__image}>
        <img src={img} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small_film_card__title">
        <Link to={'/film-page'}>{title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
