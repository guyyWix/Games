import Button from "../Button/Button";
import {PLAY_AGAIN_TEXT} from "../../Constants/General";
import {GameState} from "../../Types/Types";
import React from "react";
import "./GameOverBanner.css"


interface GameOverBannerProps {
    gameState: GameState,
    onPlayAgainClickHandler: () => void,
    getPlayerWonText: (gameState: GameState) => string,
}

const GameOverBanner: React.FC<GameOverBannerProps> = ({gameState, onPlayAgainClickHandler, getPlayerWonText}) => {
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