import { Move } from "./Move";
export class Board {
    private grid: ("X" | "O" | null)[][];
    constructor( private rows: number = 6, private columns: number = 7) {
        this.grid = new Array(rows).fill(null).map(() => new Array(columns).fill(null)); // fyller en array med nuller
        
    }

    public makeMove(move: Move): boolean {
        for (let row = this.rows - 1; row >= 0; row--) { // loopar igenom raderna bakifrån
            if (!this.grid[row][move.column]) {
                this.grid[row][move.column] = move.player.symbol; // sätter in brickan på första lediga platsen
                return true;
            }
        }
        return false; // om det inte finns någon plats att lägga brickan på
    }

    public isFull(): boolean {
        return this.grid[0].every(cell => cell !== null); // kollar om översta raden är full
    }

    public getGrid(): ("X" | "O" | null)[][] {
        return this.grid; // returnerar spelplanen
    }

    public printBoard(): void {
        for (let row of this.grid) {
            console.log(row.map(cell => cell ? cell : ' ').join('|')); // skriver ut en rad
        }
        console.log("-".repeat(this.columns * 2 - 1)); // skriver ut en rad med streck
    }
}