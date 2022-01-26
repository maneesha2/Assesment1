export default function about({ title, description, image }) {
  return (
    <div className="about" id="about">
      <div className="aboutContent">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="marioFlying">
        <img className="mario" {...image}></img>
      </div>
    </div>
  );
}
