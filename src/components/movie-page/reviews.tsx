import Review from "@components/movie-page/review.tsx";
import {setSection} from "@store/action.ts";
import {useAppSelector, useAppDispatch} from '@components/use-app/use-app.tsx';


function Reviews() {
  const dispatch = useAppDispatch();
  dispatch(setSection('Reviews'));
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (<Review {...review}/>))}
      </div>
    </div>
  );
}

export default Reviews;
