export function Subscribe({ submit, state }) {
  const display = state ? "flex" : "none";
  return (
    <div className="subscribe" style={{ display }}>
      <img src={submit.image.src} alt={submit.image.alt} />
      <p className="submit-text">{submit.title}</p>
      <p>{submit.subtext}</p>
    </div>
  );
}
