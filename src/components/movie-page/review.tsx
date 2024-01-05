import {ReviewType} from 'types/review.ts';

function Review(review: ReviewType) {
  const date = new Date(review.date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={review.date}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">7,6</div>
    </div>
  );
}

export default Review;
