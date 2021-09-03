import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "../Header/Header.jsx";
import InputsForm from "../Inputs/inputs.jsx";
import CartContents from "../Cart/Cart.jsx";
import GroceryList from "../GroceryList/GroceryList";

function App() {
  let [grocieriesList, setGrocieriesList] = useState([]);
  let [newItem, setNewItem] = useState([""]);
  let [newQuanity, setNewQuanity] = useState([0]);
  let [newUnit, setNewUnit] = useState([""]);
  let [newPurchase, setNewPurchase] = useState([false]);

  // on load, get groceries
  useEffect(() => {
    getGroceries();
  }, []);

  const getGroceries = () => {
    axios
      .get("/list")
      .then((response) => {
        setGrocieriesList(response.data);
      })
      .catch((err) => {
        alert("error getting groceries");
        console.log(err);
      });
  };

  const addGrocery = () => {
    axios
      .post("/list", {
        item: newItem,
        quanity: newQuanity,
        unit: newUnit,
        purchase: newPurchase,
      })
      .then((response) => {
        // clear inputs
        setNewItem("");
        setNewQuanity(0);
        setNewUnit("");
        setNewPurchase(false);

        //call getGroceries
        getGroceries();
      })
      .catch((err) => {
        alert("Error Adding Grocery");
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem) {
      addGrocery();
    } else {
      alert("The new item needs more data!");
    }
  };

  return (
    <div className="App">
      <Header />
      <InputsForm
        newItem={newItem}
        setNewItem={setNewItem}
        newQuanity={newQuanity}
        setNewQuanity={setNewQuanity}
        newUnit={newUnit}
        setNewUnit={setNewUnit}
        handleSubmit={handleSubmit}
      />
      <CartContents />
      <GroceryList grocieriesList={grocieriesList} />
    </div>
  );
}

export default App;
