import {Board, GameState} from "../Types/Types";

export abstract class GameManager {
    private readonly playerValues: { firstPlayer: string, secondPlayer: string };
    private readonly rows: number;
    private readonly columns: number;

    protected constructor(rows: number, columns: number, playerValues: { firstPlayer: string, secondPlayer: string }) {
        this.rows = rows;
        this.columns = columns;
        this.playerValues = {...playerValues};
    }

    abstract checkIfGameIsDone(board: Board): boolean;

    abstract makeMove(board: Board, value: string, column: number, row?: number): Board;

    abstract validateMove(board: Board, column: number, row ?: number): boolean;

    public getFirstPlayer() {
        return this.playerValues.firstPlayer;
    }

    public getSecondPlayer() {
        return this.playerValues.secondPlayer;
    }

    public getPlayerWonText(gameState: GameState) {
        let gameOverText = 'Game is over \n';
        if (gameState !== GameState.Ongoing) {
            if (gameState === GameState.FirstPlayerWon) {
                gameOverText += `${this.playerValues.firstPlayer} Won!`
            } else if (gameState === GameState.SecondPlayerWon) {
                gameOverText += `${this.playerValues.secondPlayer} Won!`;
            } else {
                gameOverText += 'its a draw!'
            }
        }
        return gameOverText;
    }

    public initBoard() {
        let board: Board = [];
        for (let i = 0; i < this.rows; i++) {
            board.push([]);
            for (let j = 0; j < this.columns; j++) {
                board[i].push({value: '', row: i, column: j})
            }
        }
        return board;
    }

    public getMaxTurns() {
        return this.columns * this.rows;
    }

}