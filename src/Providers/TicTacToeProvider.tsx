import React, {useContext, useEffect, useState} from 'react';
import {checkIfGameIsDone, initBoard} from "../Utils/utils";
import {COLUMNS, FIRST_PLAYER, ROWS, SECOND_PLAYER} from "../Constants/Constants";
import {Board, GameState} from '../Types/Types';

const TicTacToeContext = React.createContext({
    makeMove: (row: number, column: number) => {
    },
    resetBoard: () => {
    },
    board: [] as Board,
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

    const makeMove: (row: number, column: number) => void = (row, column) => {
        setTurnCounter(prev => prev + 1);
        toggleCurrPlayer();
        setBoard((prev) => {
            const newArr = structuredClone(prev);
            newArr[row][column] = {row, column, value: currentPlayer};
            return newArr;
        });
    };

    const resetBoard = () => {
        setTurnCounter(0);
        setBoard(initBoard(COLUMNS, ROWS));
        setGameState(GameState.Ongoing);
    }
    const [turnCounter, setTurnCounter] = useState(0);
    const [board, setBoard] = useState<Board>(initBoard(COLUMNS, ROWS));
    const [currentPlayer, setCurrentPlayer] = useState(FIRST_PLAYER);
    const [gameState, setGameState] = useState(GameState.Ongoing);
    useEffect(() => {
        if (checkIfGameIsDone(board)) {
            return currentPlayer === FIRST_PLAYER ? setGameState(GameState.SecondPlayerWon) : setGameState(GameState.FirstPlayerWon);
        }
        if (turnCounter === COLUMNS * ROWS) {
            setGameState(GameState.Draw);
        }
    }, [board, currentPlayer])

    return (<TicTacToeContext.Provider
        value={{
            makeMove,
            resetBoard,
            board,
            gameState,
        }}>
        {children}
    </TicTacToeContext.Provider>);
}

export default TicTacToeProvider;