import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header.jsx'
import InputsForm from '../Inputs/inputs.jsx';  
import cartContents from '../Cart/cart.jsx';


function App() {
    return (
        <div className="App">
            < Header />
            < InputsForm />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );

    // on load, get groceries
    useEffect(() => {
        getGroceries()
    }, [])


    const getGroceries = () => {
        axios.get('/groceries')
            .then(response => {
            setGuestList(response.data)
            })
            .catch(err => {
                alert('error getting groceries');
                console.log(err);
        })
    }


const addGrocery = () => {
    axios.post('/groceries', { item: newItem, quantity: newQuantity, unit: newUnit })
      .then(response => {
        // clear inputs
        setnewItem('');
        setnewQuantitiy(0);
        setnewUnit('');
        
          //call getGroceries
        getGroceries();
      })
      .catch(err => {
        alert('Error Adding Grocery');
        console.log(err);
      })
  };











    
}

export default App;
