import Star from '../assets/star-filled.svg';
import EmptyStar from '../assets/star-empty.svg';
import '../styles/Rating.scss';

function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rating ? <img src={Star}></img> : <img src={EmptyStar}></img>
  ));

  return <div className="rating">{stars}</div>;
}

export default Rating;