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

      <button className="btn btn-primary" onClick={props.updateAll} type="submit">Reset</button>
      <button className="btn btn-primary" onClick={() =>deleteAllGrocery()} type="submit">clear</button>
    </>
  );
}

export default CartContents;
