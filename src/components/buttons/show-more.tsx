import {changeShowedFilms} from '@store/action';
import {useAppDispatch} from '@components/use-app/use-app.tsx';

export default function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleShowMoreClick = () => {
    dispatch(changeShowedFilms());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreClick}>
        Show more
      </button>
    </div>
  );
}
