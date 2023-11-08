import {Film} from 'types/film.ts';
import FilmCard from '@components/film-card/film-card.tsx';

type FilmCardListProps = {
  films: Film[];
}

function FilmCardList({films}: FilmCardListProps) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-key */}
      {films.map((film) => (<FilmCard film={film}/>))}
    </>
  );
}

export default FilmCardList;
