"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinChecker = void 0;
class WinChecker {
    constructor(board) {
        this.board = board;
    }
    checkForWin(player) {
        const grid = this.board.getGrid();
        const symbol = player.symbol;
        return this.checkHorizontal(grid, symbol) || this.checkVertical(grid, symbol) || this.checkDiagonal(grid, symbol);
    }
    checkHorizontal(grid, symbol) {
        for (let row of grid) {
            for (let col = 0; col <= grid[0].length - 4; col++) {
                if (row.slice(col, col + 4).every(cell => cell === symbol)) {
                    return true;
                }
            }
        }
        return false;
    }
    checkVertical(grid, symbol) {
        for (let col = 0; col < grid[0].length; col++) {
            for (let row = 0; row <= grid.length - 4; row++) {
                if ([0, 1, 2, 3].every(i => grid[row + i][col] === symbol)) {
                    return true;
                }
            }
        }
        return false;
    }
    checkDiagonal(grid, symbol) {
        // Diagonal nedåt höger
        for (let row = 0; row <= grid.length - 4; row++) {
            for (let col = 0; col <= grid[0].length - 4; col++) {
                if ([0, 1, 2, 3].every(i => grid[row + i][col + i] === symbol)) {
                    return true;
                }
            }
        }
        // Diagonal uppåt höger
        for (let row = 3; row < grid.length; row++) {
            for (let col = 0; col <= grid[0].length - 4; col++) {
                if ([0, 1, 2, 3].every(i => grid[row - i][col + i] === symbol)) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.WinChecker = WinChecker;
