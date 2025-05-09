import Star from '../assets/star-filled.svg';
import EmptyStar from '../assets/star-empty.svg';
import '../styles/Rating.scss';

function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    index < rating ? <img className="star" key={index} src={Star}></img> : <img className="star" key={index} src={EmptyStar}></img>
  ));

  return <div className="rating">{stars}</div>;
}

export default Rating;