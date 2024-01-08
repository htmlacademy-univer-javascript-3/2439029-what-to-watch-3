import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {getMyListCount} from '@store/film/selections.ts';
import {postFavorite} from '@api/api-action.ts';


type MyListProps ={
  isFavorite: boolean;
  id: string;
}
export default function MyListButton({isFavorite,id}: MyListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const count = useAppSelector(getMyListCount);
  const handleClick = () => {
    dispatch(postFavorite({id: id,status:isFavorite ? 0 : 1}));
  };

  return (
    <button className="btn btn--list film-card__button" onClick={handleClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{count}</span>
    </button>
  );
}
