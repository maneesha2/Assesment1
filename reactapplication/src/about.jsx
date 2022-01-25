export default function About({ about }) {
  return (
    <div className="about" id="about">
      <div className="aboutContent">
        <h1>{about.title}</h1>
        <p>{about.description}</p>
      </div>
    </div>
  );
}
