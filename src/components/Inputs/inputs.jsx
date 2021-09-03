function InputsForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addGrocery(grocery);
  };

  return (
    <div className="form-group">
      <h2>Add an Item:</h2>

      <form onSubmit={props.handleSubmit}>
        <label>Item</label>
        <input
          className="form-control"
          type="text"
          placeholder="Item"
          value={props.newItem}
          onChange={(evt) => props.setNewItem(evt.target.value)}
        />
        <label>Quanity</label>
        <input
          className="form-control"
          type="number"
          placeholder="Quanity"
          value={props.newQuanity}
          onChange={(evt) => props.setNewQuanity(evt.target.value)}
        />
        <label>Unit</label>
        <input
          className="form-control"
          type="text"
          placeholder="Unit"
          value={props.newUnit}
          onChange={(evt) => props.setNewUnit(evt.target.value)}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default InputsForm;
