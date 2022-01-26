export default function about({ title, image }) {
  return (
    <div className="about" id="about">
      <div className="aboutContent">
        <h1>{title}</h1>
        <p1>
          8-Bit games provides free retro games on-site for everyone to play.
          Bringing
        </p1>
        <p>back nostalgic memories of NES classic games online.</p>
      </div>
      <div className="marioFlying">
        <img className="mario" {...image}></img>
      </div>
    </div>
  );
}
