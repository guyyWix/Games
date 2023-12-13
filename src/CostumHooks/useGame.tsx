import {Board, GameState, Game} from "../Types/Types";
import {useEffect, useState} from "react";
import {GameManager} from "../GameManagers/GameManager";

const useGame: (gameManager: GameManager) => Game = (gameManager) => {
    const firstPlayer = gameManager.getFirstPlayer();
    const secondPlayer = gameManager.getSecondPlayer();
    const toggleCurrPlayer = () => {
        setCurrentPlayer((prev) => prev === firstPlayer ? secondPlayer : firstPlayer);
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
        setBoard(gameManager.initBoard());
        setGameState(GameState.Ongoing);
    }

    const [turnCounter, setTurnCounter] = useState(0);
    const [board, setBoard] = useState<Board>(gameManager.initBoard());
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayer);
    const [gameState, setGameState] = useState(GameState.Ongoing);

    useEffect(() => {
        if (gameManager.checkIfGameIsDone(board)) {
            return currentPlayer === firstPlayer ? setGameState(GameState.SecondPlayerWon) : setGameState(GameState.FirstPlayerWon);
        }
        if (turnCounter === gameManager.getMaxTurns()) {
            setGameState(GameState.Draw);
        }
    }, [board, currentPlayer, firstPlayer, gameManager, turnCounter]);

    const game: Game = {
        makeMove,
        resetBoard,
        board,
        gameState,
        getPlayerWonText: gameManager.getPlayerWonText.bind(gameManager),
    }

    return game;
}

export default useGame;