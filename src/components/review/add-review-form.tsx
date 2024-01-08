import {useState, FormEvent, useEffect} from 'react';
import {postReview} from '@api/api-action.ts';
import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {useParams} from 'react-router-dom';
import {getError} from '@store/film/selections.ts';

export function AddReviewForm(): JSX.Element {
  const [filmRating, setFilmRating] = useState(0);
  const [text, setText] = useState<string | null>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const {id} = useParams();

  useEffect(() => {
    setIsSubmitDisabled(!(filmRating > 0 && text && text.length >= 50 && text.length <= 400));
  }, [filmRating, text]);

  const submit = ((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isSubmitDisabled) {
      setIsFormDisabled(true);
      dispatch(postReview({comment: String(text), rating: filmRating, id: String(id)}))
        .finally(() => setIsFormDisabled(false));
    }
  });

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={submit}
    >
      <div className="rating">
        {error !== null ?
          <div className="add-review__btn">
            <p>{error}</p>
          </div> : ''}
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
            <>
              <input
                className="rating__input"
                id={`star-${num}`}
                type="radio"
                name="rating"
                value={`${num}`}
                onChange={() => {
                  setFilmRating(num);
                }}
                disabled={isFormDisabled}
              />
              <label className="rating__label" htmlFor={`star-${num}`}>
                Rating {num}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isFormDisabled}
          onChange={(e) => {
            setText(e.target.value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
