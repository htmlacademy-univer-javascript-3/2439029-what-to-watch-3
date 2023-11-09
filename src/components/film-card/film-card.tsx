import {Film} from 'types/film.ts';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '@components/video-player/video-player.tsx';

type FilmCardProps = {
  film: Film;
  activeFilm: number | null;
  onMouseOver: (id: number) => void;
  onMouseOut: () => void;
}

function FilmCard({film, activeFilm, onMouseOver, onMouseOut}: FilmCardProps) {
  const [, setActiveCardId] = useState(0);
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCardId(film.id)}>
      <div className="small-film-card__image" onMouseOver={() => onMouseOver(film.id)} onMouseOut={() => onMouseOut()}>
        <VideoPlayer film={film} activeFilm={activeFilm} isMuted/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
