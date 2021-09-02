import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import InputsForm from '../Inputs/inputs.jsx';  


function App() {

    function deleteGroceries(item) {
        axios.delete('/groceries')
            .then(response => {
            
            })
            .catch(err => {
                alert('Error deleting item');
                console.log(err);
            })
    }

    return (
        <div className="App">
            < Header />
            < InputsForm />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
