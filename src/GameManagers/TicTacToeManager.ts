import {Board} from "../Types/Types";
import {GameManager} from "./GameManager";

export class TicTacToeManager extends GameManager {
    constructor() {
        super(3, 3, {firstPlayer: 'X', secondPlayer: 'O'})
    }

    checkIfGameIsDone: (board: Board) => boolean = (board: Board): boolean => {
        return (this.checkColumns(board) || this.checkRows(board) || this.checkDiagonalEqual(board));
    }
    private checkRows = (board: Board) => {
        for (let row = 0; row < board?.length; row++) {
            if (!this.isBoardCellValid(board, row, 0)) {
                continue;
            }
            if (this.isRowEqual(board, row)) return true;
        }
        return false;
    }

    private checkColumns = (board: Board) => {
        for (let column = 0; column < board[0]?.length; column++) {
            if (!this.isBoardCellValid(board, 0, column)) {
                continue
            }
            if (this.isColEqual(board, column)) return true;
        }
        return false;
    }

    private checkDiagonalEqual = (board: Board) => {
        if (this.isBoardCellValid(board, 0, 0)) {
            if (this.isLeftDiagonalEqual(board)) return true;
        }
        if (this.isBoardCellValid(board, 0, board.length - 1)) {
            return this.isRightDiagonalEqual(board)
        }
        return false;
    }

    private isRowEqual = (board: Board, row: number) => {
        for (let col = 1; col < board[row].length; col++) {
            if (board[row][col - 1]?.value !== board[row][col]?.value) {
                return false
            }
        }
        return true;
    }

    private isColEqual = (board: Board, col: number) => {
        for (let row = 1; row < board.length; row++) {
            if (board[row - 1][col]?.value !== board[row][col]?.value) {
                return false;
            }
        }
        return true;
    }

    private isBoardCellValid = (board: Board, row: number, column: number) => {
        return (board[row][column].value.length !== 0);
    }

    private isLeftDiagonalEqual = (board: Board) => {
        for (let i = 1, j = 1; i < board.length && j < board[i].length; i++, j++) {
            if (board[i - 1][j - 1]?.value !== board[i][j]?.value) {
                return false;
            }
        }
        return true
    }

    private isRightDiagonalEqual = (board: Board) => {
        for (let i = board.length - 1, j = 0; i >= 0 && j < board[i].length - 1; i--, j++) {
            if (board[i - 1][j + 1]?.value !== board[i][j]?.value) {
                return false;
            }
        }
        return true
    }
}