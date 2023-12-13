import {GameManager} from "./GameManager";
import {Board} from "../Types/Types";

export class FourInARowManager extends GameManager {
    constructor() {
        super(6, 7, {firstPlayer: 'Y', secondPlayer: 'R'});
    }

    public checkIfGameIsDone = (board: Board): boolean => {
        return this.checkColumns(board) || this.checkRows(board) || this.checkDiagonals(board);
    };

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