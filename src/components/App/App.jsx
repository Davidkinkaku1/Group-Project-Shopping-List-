

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "../Header/Header.jsx";
import InputsForm from "../Inputs/inputs.jsx";
import CartContents from "../Cart/Cart.jsx";
import { response } from "express";


function App() {
  let [grocieriesList, setgrocieriesList] = useState([]);
  let [newItem, setnewItem] = useState([""]);
  let [newQuantity, setnewQuantitiy] = useState([0]);
  let [newUnit, setnewUnit] = useState([""]);
  let [newPurchase, setNewPurchase] = useState([false]);

  // on load, get groceries
  useEffect(() => {
    getGroceries();
  }, []);

  const getGroceries = () => {
    axios.get("/groceries")
      .then((response) => {
        setGuestList(response.data);
      })
      .catch((err) => {
        alert("error getting groceries");
        console.log(err);
      });
  };

  const addGrocery = () => {
    axios.post("/groceries", {
        item: newItem,
        quantity: newQuantity,
        unit: newUnit,
        purchase: newPurchase,
      })
      .then((response) => {
        // clear inputs
        setnewItem("");
        setnewQuantitiy(0);
        setnewUnit("");
        setNewPurchase(false);

        //call getGroceries
        getGroceries();
      })
      .catch((err) => {
        alert("Error Adding Grocery");
        console.log(err);
      });
  };

  const updateAll = () => {
    
    axios.put("/groceries")
      .then((response) =>{
        getGroceries();
      })

  }


  return (
    <div className="App">
      <Header />
      <InputsForm />
      <CartContents />
    </div>
  );
}

export default App;
