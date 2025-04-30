import '../styles/AccomodationTitle.scss';

function AccomodationTitle({ title, location }) {
  return (
    <div className="accomodation-title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

export default AccomodationTitle;