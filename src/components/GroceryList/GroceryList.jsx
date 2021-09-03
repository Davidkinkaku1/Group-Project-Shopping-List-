import axios from "axios";


const GroceryList = (props) => {
// Delete button for indivudual items 

const deleteGrocery = (id) => {
  axios.delete(`/list/${id}`).then((response) => {
    props.getGroceries();
  });
}
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

            {props.grocieriesList.map((grocery) => (
              <tr key={grocery.id}>
                <td>{grocery.item}</td>
                <td>{grocery.quantity}</td>
                <td>{grocery.unit}</td>
                <td>{grocery.purchased ? "purchased" : "not purchased"}</td>
                <td>
                  {!grocery.purchased && <button className="btn btn-primary" onClick={()=> {props.updateOne(grocery.id)}}>Buy</button>}
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => deleteGrocery(grocery.id)} type="submit">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
  );
};

export default GroceryList;
