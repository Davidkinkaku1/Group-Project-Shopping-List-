import React, { useEffect } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import InputsForm from '../Inputs/inputs.jsx';  


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














    
}

export default App;
