import {Link, useParams} from 'react-router-dom';

import {useEffect, useRef, useState} from 'react';
import {getFilm} from '@api/api-action.ts';
import {getFilmData, getHasFilmError} from '@store/film/selections.ts';
import Spinner from '@components/spinner/spinner.tsx';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {PATHS} from '@const/paths.ts';
import Error from '@pages/error/error.tsx';

export function PlayerPage() {
  const id = useParams().id || '';
  const film = useAppSelector(getFilmData);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const isMounted = useRef(false);
  const error = useAppSelector(getHasFilmError);
  if (error) {
    return <Error id={id}/>;
  }

  const getDurationFormat = (seconds: number): string => {
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    if (seconds / 60 / 60 >= 1) {
      return `-${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    return `-${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
    if (!isMounted.current) {
      if (!film || film.id !== id) {
        dispatch(getFilm(id));
      }
      isMounted.current = true;
    }
  }, [id, film, dispatch]);
  const handlePlayButtonClick = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleProgressChange = () => {
    const durationTime = videoRef.current?.duration || 0;
    const currentTime = videoRef.current?.currentTime || 0;
    if (durationTime && currentTime) {
      setProgress(currentTime / durationTime * 100);
      setDuration(durationTime - currentTime);
    }
  };
  const handleFullScreenButtonClick = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };
  if (!film) {
    return (
      <Spinner/>
    );
  }
  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        onTimeUpdate={handleProgressChange}
        className="player__video"
        poster={film.backgroundImage}
      >
      </video>

      <Link to={PATHS.MoviePage(film.id)}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getDurationFormat(duration)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            {isPlaying ? (
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            )}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
