export type Board = Array<Array<Square>>;

export enum GameState {
    Ongoing,
    Draw,
    FirstPlayerWon,
    SecondPlayerWon,
}

export interface Game {
    resetBoard: () => void;
    updateCell: () => void;
    checkIfGameOver: () => void;
    getGameState: () => GameState;
    getBoard: () => Board;
    getCurrentPlayer: () => string;
    updateCurrentPlayer: () => void;
}

export interface Square {
    value: string,
    row: number,
    column: number,
}