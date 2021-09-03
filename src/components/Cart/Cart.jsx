import axios from "axios";

function CartContents(props) {
// Delete button for indivudual items 

// Delete button for indivudual items 

const deleteAllGrocery = () => {
  axios.delete("/list/deleteAll").then((response) => {
    props.getGroceries();
  });
}


  return (
    <>
      <h2>Cart Contents</h2>
      <button type="submit">Reset</button>
      <button onClick={() =>deleteAllGrocery()} type="submit">clear</button>
    </>
  );
}

export default CartContents;
