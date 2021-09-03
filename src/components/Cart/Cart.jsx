const CartContents = (props) => {
  return (
    <>
      <h2>Cart Contents</h2>
      <button onClick={props.updateAll} type="submit">Reset</button>
      <button type="submit">Clear</button>
    </>
  );
}

export default CartContents;
