import Review from '@components/movie-page/review.tsx';
import {useAppSelector, useAppDispatch} from '@components/use-app/use-app.tsx';
import {getReviews} from '@store/film/selections.ts';
import {setSection} from '@store/film/process.ts';


function Reviews() {
  const dispatch = useAppDispatch();
  dispatch(setSection('Reviews'));
  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (<Review key={review.id}{...review}/>))}
      </div>
    </div>
  );
}

export default Reviews;
