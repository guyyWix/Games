import "./Board.css";
import {useTicTacToe} from "../Providers/TicTacToeProvider";
import Row from "../Common/Row"

const Board = () => {
    const ticTacToeContext = useTicTacToe();
    const ticTacToeBoard = ticTacToeContext.board;

    const board = ticTacToeBoard.map((cells, rowIndex) =>
        (<li className="row">
            <Row cells={cells} rowIndex={rowIndex}/>
        </li>)
    )

    return (<>
        <ul className="board">{board}</ul>
    </>)
}

export default Board;