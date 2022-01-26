export function Form({ display, forms, setState, info }) {
  return (
    <form className="form" style={{ display }}>
      {forms.map((form) => (
        <div className="input-icons">
          <img className="iconInput" src={form.icon} />
          <input type={form.type} className="input" placeholder={form.text} />
        </div>
      ))}
      <button
        className="button"
        name="submit"
        onClick={() => {
          setState(true);
        }}
      >
        {info.buttonText}
      </button>
    </form>
  );
}
