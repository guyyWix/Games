import React from 'react';
import './App.css';
import Board from "../TicaTacToe/Board";
import GlobalProvider from "../Providers/GlobalProvider";

function App() {


    return (<GlobalProvider>
        <div className="container">
            <Board/>
        </div>
    </GlobalProvider>)
}

export default App;
