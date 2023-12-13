import "./Board.css";
import Row from "../Row/Row"
import {Board as BoardType, GameState} from "../../Types/Types";
import React from "react";


interface BoardInterface {
    board: BoardType,
    onCellClickHandler: (row: number, column: number) => void
    gameState: GameState,
}

const Board: React.FC<BoardInterface> = ({board, onCellClickHandler, gameState}) => {
    const mappedBoard = board.map((cells, rowIndex) =>
        (<li className="row">
            <Row cells={cells} rowIndex={rowIndex} onCellClickHandler={onCellClickHandler} gameState={gameState}/>
        </li>)
    )

    return (<>
        <ul className="board">{mappedBoard}</ul>
    </>)
}

export default Board;