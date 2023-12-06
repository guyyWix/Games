import React from 'react';
import './App.css';
import Board from "../TicaTacToe/Board";
import {useTicTacToe} from "../Providers/TicTacToeProvider";
import GameOverBanner from "../Common/GameOverBanner";
import {GameState} from "../Types/Types";

function App() {

    const globalContext = useTicTacToe();
    const isGameOver = globalContext.gameState !== GameState.Ongoing;

    return (<div className="container">
        {isGameOver && <GameOverBanner gameState={globalContext.gameState}
                                       onPlayAgainClickHandler={globalContext.resetLiveBoard}/>}

        <Board/>
    </div>)
}

export default App;
