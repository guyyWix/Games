import "./Board.css";
import {useGlobal} from "../GlobalProvider";
import Row from "../Common/Row"
import {GameState} from "../Types/Types";
import {getPlayerWonText} from "../utils";
import Button from "./Button";
import {PLAY_AGAIN_TEXT} from "../Constants/Constants";


const Board = () => {
    const globalContext = useGlobal();
    const globalBoard = globalContext.liveBoard;
    const isGameOver = globalContext.gameState !== GameState.Ongoing;
    const onPlayAgainClickHandler = () => {
        globalContext.resetLiveBoard()
    }
    const board = globalBoard.map((cells, rowIndex) => {
        return (<li className="row">
            <Row cells={cells} rowIndex={rowIndex}/>
        </li>)
    })

    const gameOverText = getPlayerWonText(globalContext.gameState);

    return (<>
        {isGameOver && (<div className="game-over">
                <div>{gameOverText}</div>
                <Button text={PLAY_AGAIN_TEXT} onClickHandler={onPlayAgainClickHandler}/>
            </div>
        )}
        <ul className="board">{board}</ul>
    </>)
}

export default Board;