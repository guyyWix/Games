import {GameManager} from "./GameManager";
import {Board} from "../Types/Types";
import {ROWS, COLUMNS, FIRST_PLAYER, SECOND_PLAYER} from '../Constants/FourInARow';

export class FourInARowManager extends GameManager {
    constructor() {
        super(ROWS, COLUMNS, {firstPlayer: FIRST_PLAYER, secondPlayer: SECOND_PLAYER});
    }

    public checkIfGameIsDone = (board: Board): boolean => {
        return this.checkColumns(board) || this.checkRows(board) || this.checkDiagonals(board);
    };

    public validateMove(board: Board, column: number): boolean {
        return board[0][column].value === '';
    }

    public makeMove(board: Board, value: string, column: number): Board {
        const newArr = structuredClone(board);
        for (let i = newArr.length - 1; i >= 0; i--) {
            if (newArr[i][column].value === '') {
                newArr[i][column] = {column, row: i, value};
                break
            }
        }
        return newArr;
    }

    private checkRows = (board: Board): boolean => {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col <= board[row].length - 4; col++) {
                const cell = board[row][col].value;
                if (cell !== '' &&
                    cell === board[row][col + 1].value &&
                    cell === board[row][col + 2].value &&
                    cell === board[row][col + 3].value) {
                    return true;
                }
            }
        }
        return false;
    };

    private checkColumns = (board: Board): boolean => {
        for (let col = 0; col < board[0].length; col++) {
            for (let row = 0; row <= board.length - 4; row++) {
                const cell = board[row][col].value;
                if (cell !== '' &&
                    cell === board[row + 1][col].value &&
                    cell === board[row + 2][col].value &&
                    cell === board[row + 3][col].value) {
                    return true;
                }
            }
        }
        return false;
    };

    private checkDiagonals = (board: Board): boolean => {
        for (let row = 0; row <= board.length - 4; row++) {
            for (let col = 0; col <= board[row].length - 4; col++) {
                const cell = board[row][col].value;
                if (cell !== '' &&
                    cell === board[row + 1][col + 1].value &&
                    cell === board[row + 2][col + 2].value &&
                    cell === board[row + 3][col + 3].value) {
                    return true;
                }
            }
        }

        for (let row = 3; row < board.length; row++) {
            for (let col = 0; col <= board[row].length - 4; col++) {
                const cell = board[row][col].value;
                if (cell !== '' &&
                    cell === board[row - 1][col + 1].value &&
                    cell === board[row - 2][col + 2].value &&
                    cell === board[row - 3][col + 3].value) {
                    return true;
                }
            }
        }

        return false;
    };

}