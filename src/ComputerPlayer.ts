// ComputerPlayer.ts

import { Player } from './Player';
import { Board } from './Board';
import { Move } from './Move';

export class ComputerPlayer extends Player {
    constructor(name: string, symbol: "X" | "O") {
        super(name, symbol);
    }

    public getMove(board: Board): number {
        const availableColumns: number[] = [];
        for (let col = 0; col < board['columns']; col++) {
            if (board['grid'][0][col] === null) {
                availableColumns.push(col);
            }
        }
        const randomIndex = Math.floor(Math.random() * availableColumns.length);
        return availableColumns[randomIndex];
    }
}