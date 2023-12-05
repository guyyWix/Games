import Button from "../TicaTacToe/Button";
import {PLAY_AGAIN_TEXT} from "../Constants/Constants";
import {getPlayerWonText} from "../Utils/utils";
import {GameState} from "../Types/Types";
import React from "react";
import "./GameOverBanner.css"


interface GameOverBannerProps {
    gameState: GameState,
    onPlayAgainClickHandler: () => void,
}

const GameOverBanner: React.FC<GameOverBannerProps> = ({gameState, onPlayAgainClickHandler}) => {
    const gameOverText = getPlayerWonText(gameState);
    {
        return (<div className="game-over">
                <div>{gameOverText}</div>
                <Button text={PLAY_AGAIN_TEXT} onClickHandler={onPlayAgainClickHandler}/>
            </div>
        )
    }
}

export default GameOverBanner;