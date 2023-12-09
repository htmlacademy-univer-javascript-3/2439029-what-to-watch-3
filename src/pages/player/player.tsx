import {Film} from 'types/film.ts';
import NotFound from '@pages/not-found/not-found.tsx';
import {useParams} from 'react-router-dom';

type PlayerProps = {
  films: Film[];
}

function Player({films}: PlayerProps) {
  const {id} = useParams<string>();
  const currentId = Number(id);
  const currentFilm = films.find((f) => f.id === currentId);
  return currentFilm ? (
    <div className="player">
      <video src={currentFilm.video} className="player__video" poster={currentFilm.img}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">{currentFilm.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <NotFound/>
  );
}

export default Player;
