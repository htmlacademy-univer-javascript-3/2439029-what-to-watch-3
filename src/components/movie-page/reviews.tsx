import {useAppSelector} from "@components/use-app/use-app.tsx";
import Review from "@components/movie-page/review.tsx";

function Reviews() {
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
