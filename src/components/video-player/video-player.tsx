import {useEffect, useRef, useState} from 'react';
import {Film} from 'types/film.ts';


type VideoPlayerProps = {
  film: Film;
  activeFilm: string | null;
  isMuted: boolean;
}

export default function VideoPlayer({film, activeFilm, isMuted}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoPlayer = videoRef.current;

    const dataLoadedHandle = () => {
      setIsLoaded(true);
    };

    videoPlayer?.addEventListener('loadeddata', dataLoadedHandle);

    return () => {
      videoPlayer?.removeEventListener('loadeddata', dataLoadedHandle);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!isLoaded || !videoElement) {
      return;
    }
    if (activeFilm === film.id) {
      videoElement.play();
      return;
    }
    videoElement.pause();
    videoElement.src = film.previewVideoLink;
  }, [activeFilm, isLoaded, film.id, film.previewVideoLink]);

  return (
    <video width="280" height="175" poster={film.previewImage} ref={videoRef} src={film.previewVideoLink} muted={isMuted}></video>
  );
}
