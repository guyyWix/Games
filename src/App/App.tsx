import './App.css';
import TicTacToe from "../Games/TicaTacToe/TicTacToe";
import React from "react";
import FourInARow from "../Games/FourInARow/FourInARow";

function App() {
    return (
        <div>
            <FourInARow/>
            <TicTacToe/>
        </div>
    )
}

export default App;
