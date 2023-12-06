import {Board, Game, GameState} from "../Types/Types";
import {initBoard, checkIfGameIsDone} from "../Utils/utils";
import {COLUMNS, FIRST_PLAYER, ROWS, SECOND_PLAYER} from "../Constants/Constants";

export class TicTacToe implements Game {
    private board: Board;
    private currentPlayer: string;
    private gameState: GameState;

    constructor() {
        this.board = initBoard(COLUMNS, ROWS);
        this.currentPlayer = FIRST_PLAYER;
        this.gameState = GameState.Ongoing;
    }

    resetBoard(): void {
        this.board = initBoard(COLUMNS, ROWS);
        this.gameState = GameState.Ongoing;
    }

    updateCell(): void {
        // Implement your cell update logic here
    }

    checkIfGameOver(): void {
        if (checkIfGameIsDone(this.board)) {
            this.gameState = this.currentPlayer === FIRST_PLAYER ? GameState.SecondPlayerWon : GameState.FirstPlayerWon;
        }
    }

    getGameState(): GameState {
        return this.gameState;
    }

    getBoard(): Board {
        return this.board;
    }

    getCurrentPlayer(): string {
        return this.currentPlayer;
    }

    updateCurrentPlayer(): void {
        this.currentPlayer = this.currentPlayer === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER;
    }
}