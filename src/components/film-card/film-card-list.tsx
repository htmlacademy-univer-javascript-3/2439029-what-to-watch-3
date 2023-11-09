import {Film} from 'types/film.ts';
import FilmCard from '@components/film-card/film-card.tsx';
import {useState} from 'react';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type FilmCardListProps = {
  films: Film[];
}

function FilmCardList({films}: FilmCardListProps) {
  const [activeFilm, setSelectedFilm] = useState<number | null>(null);
  let timer: undefined | TimeoutId = undefined;

  const handleFocus = (id: number) => {
    timer = setTimeout(() => {
      setSelectedFilm(id);
    }, 200);
  };

  const handleFocusOff = () => {
    clearTimeout(timer);
    setSelectedFilm(null);
  };
  return (
    <>
      {/* eslint-disable-next-line react/jsx-key */}
      {films.map((film) => (
        <FilmCard film={film} activeFilm={activeFilm} onMouseOver={handleFocus} onMouseOut={handleFocusOff}/>))}
    </>
  );
}

export default FilmCardList;
