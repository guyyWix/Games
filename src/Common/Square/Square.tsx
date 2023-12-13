import './Square.css';
import React from "react";
import {GameState} from "../../Types/Types";
import Button from "../Button/Button";

interface SquareProps {
    row: number,
    column: number,
    value: string,
    onCellClickHandler: (row: number, column: number) => void;
    gameState: GameState
}

const Square: React.FC<SquareProps> = ({row, column, value, gameState, onCellClickHandler}) => {
    const isButtonDisabled = gameState !== GameState.Ongoing;
    const onCellClickHandle = () => {
        onCellClickHandler(row, column);
    }
    return <Button className="square" onClickHandler={onCellClickHandle} disabled={isButtonDisabled}
                   text={value}></Button>;
}

export default Square;