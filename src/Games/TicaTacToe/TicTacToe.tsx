import GameOverBanner from "../../Common/GameOverBanner/GameOverBanner";
import Board from "../../Common/Board/Board";
import React from "react";
import useGame from "../../CostumHooks/useGame";
import {GameState} from "../../Types/Types";
import {TicTacToeManager} from "../../GameManagers/TicTacToeManager";

const TicTacToe = () => {
    const ticTacToeGame = useGame(new TicTacToeManager());
    const isGameOver = ticTacToeGame.gameState !== GameState.Ongoing;

    return (<div className="container">

        {isGameOver && <GameOverBanner gameState={ticTacToeGame.gameState}
                                       onPlayAgainClickHandler={ticTacToeGame.resetBoard}
                                       getPlayerWonText={ticTacToeGame.getPlayerWonText}/>}

        <Board board={ticTacToeGame.board} gameState={ticTacToeGame.gameState}
               onCellClickHandler={ticTacToeGame.makeMove}/>
    </div>)
}

export default TicTacToe;