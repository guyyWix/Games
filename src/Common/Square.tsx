import './Square.css';
import {useTicTacToe} from "../Providers/TicTacToeProvider";
import React from "react";
import {GameState, Square as ISquare} from "../Types/Types";
import Button from "../TicaTacToe/Button";


const Square: React.FC<ISquare> = ({row, column, value}) => {
    const globalContext = useTicTacToe();
    const isButtonDisabled = globalContext.gameState !== GameState.Ongoing;
    const onCellClickHandle = () => {
        if (value !== '') {
            return;
        }
        const currentValue = globalContext.currentPlayer;
        globalContext.toggleCurrPlayer();
        globalContext.updateLiveBoard({value: currentValue, row, column})
    }
    return <Button className="square" onClickHandler={onCellClickHandle} disabled={isButtonDisabled}
                   text={value}></Button>;
}

export default Square;