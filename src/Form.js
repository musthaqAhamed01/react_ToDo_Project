export function Form({ handleChange, item, setItem, handleSubmit, inputRef }) {
  return (
    <>
      <form className="form-container">
        <input
          ref={inputRef}
          className="input-box"
          type="text"
          value={item}
          placeholder="Add your items"
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
