import '../styles/Tags.scss'; 

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;