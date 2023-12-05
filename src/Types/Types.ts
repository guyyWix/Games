export type Board = Array<Array<Square>>;

export enum GameState {
    Ongoing,
    Draw,
    FirstPlayerWon,
    SecondPlayerWon,
}

export interface Square {
    value: string,
    row: number,
    column: number,
}