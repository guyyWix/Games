import Square from "../Square/Square";
import {GameState, Square as ISquare} from "../../Types/Types"
import React from "react";

interface RowProps {
    rowIndex: number,
    cells: ISquare[],
    onCellClickHandler: (row: number, column: number) => void,
    gameState: GameState,
}

const Row: React.FC<RowProps> = ({rowIndex, cells, onCellClickHandler, gameState}) => {
    const row = cells.map((cell, colIndex) => {
        return <Square row={rowIndex} column={colIndex} value={cell.value} onCellClickHandler={onCellClickHandler}
                       gameState={gameState}/>
    })
    return <>
        {row}
    </>
}

export default Row;