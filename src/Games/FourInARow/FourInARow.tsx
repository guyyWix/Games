import useGame from "../../CostumHooks/useGame";
import {GameState} from "../../Types/Types";
import GameOverBanner from "../../Common/GameOverBanner/GameOverBanner";
import Board from "../../Common/Board/Board";
import React from "react";
import {FourInARowManager} from "../../GameManagers/FourInARowManager";

const FourInARow = () => {
    const fourInARowGame = useGame(new FourInARowManager());
    const isGameOver = fourInARowGame.gameState !== GameState.Ongoing;

    return (<div className="container">

        {isGameOver && <GameOverBanner gameState={fourInARowGame.gameState}
                                       onPlayAgainClickHandler={fourInARowGame.resetBoard}
                                       getPlayerWonText={fourInARowGame.getPlayerWonText}/>}

        <Board board={fourInARowGame.board} gameState={fourInARowGame.gameState}
               onCellClickHandler={fourInARowGame.makeMove}/>
    </div>)
}

export default FourInARow;