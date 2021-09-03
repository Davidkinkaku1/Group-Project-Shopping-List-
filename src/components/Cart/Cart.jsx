const CartContents = (props) => {
  return (
    <>
      <h2>Cart Contents</h2>
      <button onClick={props.updateAll} type="submit">Reset</button>
      <button type="submit">clear</button>
    </>
  );
}

export default CartContents;
