import {Board, GameState} from "../Types/Types";
import {FIRST_PLAYER, SECOND_PLAYER} from "../Constants/Constants";

export const checkIfGameIsDone: (board: Board) => boolean = (board: Board): boolean => {
    console.log(`col ${checkColumns(board)} rows ${checkRows(board)} diag ${checkDiagonalEqual(board)}`)
    return (checkColumns(board) || checkRows(board) || checkDiagonalEqual(board));
}

export const initBoard: (columns: number, rows: number) => Board = (columns, rows) => {
    let board: Board = [];
    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let j = 0; j < columns; j++) {
            board[i].push({value: '', row: i, column: j})
        }
    }
    return board;
}
const checkRows = (board: Board) => {
    for (let row = 0; row < board?.length; row++) {
        if (!isBoardCellValid(board, row, 0)) {
            continue;
        }
        if (isRowEqual(board, row)) return true;
    }
    return false;
}

const checkColumns = (board: Board) => {
    for (let column = 0; column < board[0]?.length; column++) {
        if (!isBoardCellValid(board, 0, column)) {
            continue
        }
        if (isColEqual(board, column)) return true;
    }
    return false;
}

const checkDiagonalEqual = (board: Board) => {
    if (isBoardCellValid(board, 0, 0)) {
        if (isLeftDiagonalEqual(board)) return true;
    }
    if (isBoardCellValid(board, 0, board.length - 1)) {
        return isRightDiagonalEqual(board)
    }
    return false;
}

const isRowEqual = (board: Board, row: number) => {
    for (let col = 1; col < board[row].length; col++) {
        if (board[row][col - 1]?.value !== board[row][col]?.value) {
            return false
        }
    }
    return true;
}

const isColEqual = (board: Board, col: number) => {
    for (let row = 1; row < board.length; row++) {
        if (board[row - 1][col]?.value !== board[row][col]?.value) {
            return false;
        }
    }
    return true;
}

const isBoardCellValid = (board: Board, row: number, column: number) => {
    return (board[row][column].value.length !== 0);
}

const isLeftDiagonalEqual = (board: Board) => {
    for (let i = 1, j = 1; i < board.length && j < board[i].length; i++, j++) {
        if (board[i - 1][j - 1]?.value !== board[i][j]?.value) {
            return false;
        }
    }
    return true
}

const isRightDiagonalEqual = (board: Board) => {
    for (let i = board.length - 1, j = 0; i >= 0 && j < board[i].length - 1; i--, j++) {
        if (board[i - 1][j + 1]?.value !== board[i][j]?.value) {
            return false;
        }
    }
    return true
}

export const getPlayerWonText = (gameState: GameState) => {
    let gameOverText = 'Game is over \n';
    if (gameState !== GameState.Ongoing) {
        if (gameState === GameState.FirstPlayerWon) {
            gameOverText += `${FIRST_PLAYER} Won!`
        } else if (gameState === GameState.SecondPlayerWon) {
            gameOverText += `${SECOND_PLAYER} Won!`;
        } else {
            gameOverText += 'its a draw!'
        }
    }
    return gameOverText;
}