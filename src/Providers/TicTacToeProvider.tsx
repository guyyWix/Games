import React, {useContext, useEffect, useState} from 'react';
import {checkIfGameIsDone, initBoard} from "../Utils/utils";
import {COLUMNS, FIRST_PLAYER, ROWS, SECOND_PLAYER} from "../Constants/Constants";
import {Board, GameState, Square} from '../Types/Types';

const TicTacToeContext = React.createContext({
    currentPlayer: FIRST_PLAYER, toggleCurrPlayer: () => {
    }, updateLiveBoard: (square: Square) => {
    },
    resetLiveBoard: () => {
    },
    liveBoard: [] as Board,
    gameState: GameState.Ongoing,
});

interface Props {
    children?: React.ReactNode;
}

export const useTicTacToe = () => {
    return useContext(TicTacToeContext);
}
const TicTacToeProvider: React.FC<Props> = ({children}) => {
    const toggleCurrPlayer = () => {
        setCurrentPlayer((prev) => prev === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER);
    }

    const updateBoardCell: (square: Square) => void = (square) => {
        setBoard((prev) => {
            const newArr = structuredClone(prev);
            newArr[square.row][square.column] = {...square};
            return newArr;
        });
    };

    const resetBoard = () => {
        setBoard(initBoard(COLUMNS, ROWS));
        setGameState(GameState.Ongoing);
    }

    const [board, setBoard] = useState<Board>(initBoard(COLUMNS, ROWS));
    const [currentPlayer, setCurrentPlayer] = useState(FIRST_PLAYER);
    const [gameState, setGameState] = useState(GameState.Ongoing);
    useEffect(() => {
        if (checkIfGameIsDone(board)) {
            currentPlayer === FIRST_PLAYER ? setGameState(GameState.SecondPlayerWon) : setGameState(GameState.FirstPlayerWon);
        }
    }, [board, currentPlayer])

    return (<TicTacToeContext.Provider
        value={{
            currentPlayer,
            toggleCurrPlayer,
            updateLiveBoard: updateBoardCell,
            resetLiveBoard: resetBoard,
            liveBoard: board,
            gameState
        }}>
        {children}
    </TicTacToeContext.Provider>);
}

export default TicTacToeProvider;