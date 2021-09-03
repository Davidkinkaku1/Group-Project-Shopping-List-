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
            {props.grocieriesList.map((grocery) => (
              <tr key={grocery.id}>
                <td>{grocery.item}</td>
                <td>{grocery.quantity}</td>
                <td>{grocery.unit}</td>
                <td>{grocery.purchased ? "purchased" : "not purchased"}</td>
                <td>
                  <button type="submit">Buy</button>
                </td>
                <td>
                  <button onClick={() => deleteGrocery(grocery.id)} type="submit">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
};

export default GroceryList;
