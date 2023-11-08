import {Film} from 'types/film.ts';
import SmallFilmCardLink from '@components/small-film-card/small-film-card-link.tsx';

type SmallFilmsCardsLinkProps = {
  films: Film[];
}

function SmallFilmsCardsLink({films}: SmallFilmsCardsLinkProps) {
  return (films.map((film) => (<SmallFilmCardLink {...film}/>)));
}

export default SmallFilmsCardsLink;
