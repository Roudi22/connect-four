"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(rows = 6, columns = 7) {
        this.rows = rows;
        this.columns = columns;
        this.grid = new Array(rows).fill(null).map(() => new Array(columns).fill(null)); // fyller en array med nuller
    }
    makeMove(move) {
        for (let row = this.rows - 1; row >= 0; row--) { // loopar igenom raderna bakifrån
            if (!this.grid[row][move.column]) {
                this.grid[row][move.column] = move.player.symbol; // sätter in brickan på första lediga platsen
                return true;
            }
        }
        return false; // om det inte finns någon plats att lägga brickan på
    }
    isFull() {
        return this.grid[0].every(cell => cell !== null); // kollar om översta raden är full
    }
    getGrid() {
        return this.grid; // returnerar spelplanen
    }
    printBoard() {
        for (let row of this.grid) {
            console.log(row.map(cell => cell ? cell : ' ').join('|')); // skriver ut en rad
        }
        console.log("-".repeat(this.columns * 2 - 1)); // skriver ut en rad med streck
    }
}
exports.Board = Board;
