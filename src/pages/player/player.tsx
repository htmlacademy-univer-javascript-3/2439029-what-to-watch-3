// import {Film} from 'types/film.ts';
// import NotFound from '@pages/not-found/not-found.tsx';
// import {useParams} from 'react-router-dom';
// import {useEffect, useRef, useState} from 'react';
// import cn from 'classnames';
//
// type PlayerProps = {
//   films: Film[];
// }
//
// function Player({films}: PlayerProps) {
//   const {id} = useParams<string>();
//   const currentId = Number(id);
//   const currentFilm = films.find((f) => f.id === currentId);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   useEffect(() => {
//     const playerElement = videoRef.current;
//
//     if (!playerElement) {
//       return;
//     }
//
//     if (isPlaying) {
//       playerElement.play();
//       return;
//     }
//
//     playerElement.pause();
//   }, [isPlaying]);
//   return currentFilm ? (
//     <div className="player">
//       <video src={currentFilm.video} className="player__video" poster={currentFilm.img}></video>
//
//       <button type="button" className="player__exit">Exit</button>
//
//       <div className="player__controls">
//         <div className="player__controls-row">
//           <div className="player__time">
//             <progress className="player__progress" value="30" max="100"></progress>
//             <div className="player__toggler">Toggler</div>
//           </div>
//           <div className="player__time-value">{currentFilm.runTime}</div>
//         </div>
//
//         <div className="player__controls-row">
//           <button className={'player__play'} type="button" onClick={() => setIsPlaying(!isPlaying)}>
//             <svg viewBox={`0 0 ${'19'} ${'19'}`} width={'19'} height={'19'}>
//               <use xlinkHref={cn({'#play-s': !isPlaying}, {'#pause': isPlaying})}></use>
//             </svg>
//             <span>{cn({'Play': !isPlaying}, {'Pause': isPlaying})}</span>
//           </button>
//           <div className="player__name">Transpotting</div>
//
//           <button className={'player__full-screen'} type="button" onClick={() => setIsPlaying(!isPlaying)}>
//             <svg viewBox={`0 0 ${'27'} ${'27'}`} width={'27'} height={'27'}>
//               <use xlinkHref={'#full-screen'}></use>
//             </svg>
//             <span>{cn({'Play': !isPlaying}, {'Pause': isPlaying})}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <NotFound/>
//   );
// }
//
// export default Player;
