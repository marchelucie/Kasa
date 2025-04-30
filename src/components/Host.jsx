import '../styles/Host.scss';

function Host({hostName, hostPicture}) {
  return (
    <div className="host">
      <p>{hostName}</p>
        <img src={hostPicture} alt="Host" /> 
    </div>
  );
}

export default Host;