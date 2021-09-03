function InputsForm(props) {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     addGrocery(grocery);
  //   };

  return (
    <>
      <h2>Add an Item:</h2>

      <form onSubmit={props.handleSubmit}>
        <label>Item</label>
        <input
          type="text"
          placeholder="Item"
          value={props.newItem}
          onChange={(evt) => props.setNewItem(evt.target.value)}
        />
        <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={props.newQuantity}
          onChange={(evt) => props.setNewQuantitiy(evt.target.value)}
        />
        <label>Unit</label>
        <input
          type="text"
          placeholder="Unit"
          value={props.newUnit}
          onChange={(evt) => props.setNewUnit(evt.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default InputsForm;
