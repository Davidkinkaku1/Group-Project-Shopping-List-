function InputsForm(props) {
    return (
        <>
            <h2>Add an Item:</h2>

            <form onSubmit={props.handeSubmit}>
                <label>Item</label>
                <input type="text" placeholder="Item" value={props.newItem} onChange={(evt) => props.setnewtItem(evt.target.value)}
                />
                <label>Quantity</label>
                <input type="number" placeholder="Quantity" value={props.newQuantity} onChange={(evt) => props.setnewQuantity(evt.target.value)}
                />
                <label>Unit</label>
                <input type="text" placeholder="Unit" value={props.newUnit} onChange={(evt) => props.setnewUnit(evt.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </>
    )
}


export default InputsForm;