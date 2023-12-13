export type Board = Array<Array<Square>>;

export enum GameState {
    Ongoing,
    Draw,
    FirstPlayerWon,
    SecondPlayerWon,
}

export interface Game {
    resetBoard: () => void;
    makeMove: (row: number, column: number) => void;
    gameState: GameState;
    board: Board;
    getPlayerWonText: (gameState: GameState) => string,
}

export interface Square {
    value: string,
    row: number,
    column: number,
}