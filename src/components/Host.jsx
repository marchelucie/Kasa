function Host({hostName, hostPicture}) {
  return (
    <div className="host">
      <p>{hostName}</p>
      <div className="host-picture">
        <img src={hostPicture} alt="Host" />
      </div>
    </div>
  );
}

export default Host;