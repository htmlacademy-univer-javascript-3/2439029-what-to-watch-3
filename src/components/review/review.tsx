function Review() {
  const content = [];
  for (let i = 10; i >= 1; i--) {
    content.push(<><input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i}/>
      <label className="rating__label" htmlFor={`star-${ i}`}>Rating {i}</label>
    </>);
  }
  return (
    <div className="rating">
      <div className="rating__stars">
        {content}
      </div>
    </div>
  );
}

export default Review;
