import React, {useContext, useEffect, useState} from 'react';
import {checkIfGameIsDone, initBoard} from "../Utils/utils";
import {COLUMNS, FIRST_PLAYER, ROWS, SECOND_PLAYER} from "../Constants/Constants";
import {Board, GameState, Square} from '../Types/Types';

const GlobalContext = React.createContext({
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

export const useGlobal = () => {
    return useContext(GlobalContext);
}
const GlobalProvider: React.FC<Props> = ({children}) => {
    const toggleCurrPlayer = () => {
        setCurrentPlayer((prev) => prev === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER);
    }

    const updateLiveBoard: (square: Square) => void = (square) => {
        setLiveBoard((prev) => {
            const newArr = structuredClone(prev);
            newArr[square.row][square.column] = {...square};
            return newArr;
        });
    };

    const resetLiveBoard = () => {
        setLiveBoard(initBoard(COLUMNS, ROWS));
        setGameState(GameState.Ongoing);
    }

    const [liveBoard, setLiveBoard] = useState<Board>(initBoard(COLUMNS, ROWS));
    const [currentPlayer, setCurrentPlayer] = useState(FIRST_PLAYER);
    const [gameState, setGameState] = useState(GameState.Ongoing);
    useEffect(() => {
        if (checkIfGameIsDone(liveBoard)) {
            currentPlayer === FIRST_PLAYER ? setGameState(GameState.SecondPlayerWon) : setGameState(GameState.FirstPlayerWon);
        }
    }, [liveBoard, currentPlayer])

    return (<GlobalContext.Provider
        value={{currentPlayer, toggleCurrPlayer, updateLiveBoard, resetLiveBoard, liveBoard, gameState}}>
        {children}
    </GlobalContext.Provider>);
}

export default GlobalProvider;