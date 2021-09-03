const GroceryList = (props) => {
  return (
    <>
      <h2>Grocery List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit</th>
            <th scope="col">Purchased</th>
            <th scope="col">Buy</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.grocieriesList.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.item}</td>
              <td>{customer.quantity}</td>
              <td>{customer.unit}</td>
              <td>{customer.purchased ? "purchased" : "not purchased"}</td>
              <td>
                <button className="btn btn-primary" type="submit">
                  Buy
                </button>
              </td>
              <td>
                <button className="btn btn-primary" type="submit">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GroceryList;
