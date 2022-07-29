export default function Theme() {
  return (
    <div className="themeButton">
      <label htmlFor="">Theme</label>
      <input
        className="btn btn-primary data-toggle= 'button' m-2"
        type="checkbox"
        name="themeButton"
        id="themeButton"
      />
    </div>
  );
}
