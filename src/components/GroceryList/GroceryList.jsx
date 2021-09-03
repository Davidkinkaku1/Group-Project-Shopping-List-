const GroceryList = (props) => {
  return (
    <>
      <h2>Grocery List</h2>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>quantity</th>
            <th>unit</th>
            <th>purchased</th>
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
                <button type="submit">Buy</button>
              </td>
              <td>
                <button type="submit">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GroceryList;
