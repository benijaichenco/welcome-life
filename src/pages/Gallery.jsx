function Gallery({ prop1 }) {
  return (
    <div className="gallery heb">
      {prop1.map((pic) => (
        <div className="picture-container">
          <img src={pic} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
