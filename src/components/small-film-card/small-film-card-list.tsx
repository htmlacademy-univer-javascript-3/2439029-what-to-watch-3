import {Film} from 'types/film.ts';
import SmallFilmCardLink from '@components/small-film-card/small-film-card-link.tsx';

type SmallFilmsCardsLinkProps = {
  films: Film[];
}

function SmallFilmCardList({films}: SmallFilmsCardsLinkProps) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-key */}
      {films.map((film) => (<SmallFilmCardLink film={film}/>))}
    </>
  );
}

export default SmallFilmCardList;
