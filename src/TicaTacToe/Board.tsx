import "./Board.css";
import {useGlobal} from "../Providers/GlobalProvider";
import Row from "../Common/Row"

const Board = () => {
    const globalContext = useGlobal();
    const globalBoard = globalContext.liveBoard;

    const board = globalBoard.map((cells, rowIndex) => {
        return (<li className="row">
            <Row cells={cells} rowIndex={rowIndex}/>
        </li>)
    })


    return (<>
        <ul className="board">{board}</ul>
    </>)
}

export default Board;