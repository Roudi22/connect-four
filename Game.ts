// Game.ts

import { Board } from './Board';
import { WinChecker } from './WinChecker';
import { Player } from './Player';
import { Move } from './Move';
import promptSync from 'prompt-sync';

export class Game {  // <-- Lägg till export här
    private board: Board;
    private winChecker: WinChecker;
    private players: [Player, Player];
    private currentPlayerIndex: number = 0;
    private prompt: Function;

    constructor(player1Name: string, player2Name: string) {
        const player1 = new Player(player1Name, 'X');
        const player2 = new Player(player2Name, 'O');
        this.players = [player1, player2];
        this.board = new Board();
        this.winChecker = new WinChecker(this.board);
        this.prompt = promptSync(); // Detta initialiserar prompt-sync
    }

    public start(): void {
        while (true) {
            this.board.printBoard();
            const currentPlayer = this.players[this.currentPlayerIndex];
            const moveColumn = this.getMoveColumn(currentPlayer);

            if (!this.board.makeMove(new Move(currentPlayer, moveColumn))) {
                console.log('Denna kolumn är full. Försök igen.');
                continue;
            }

            if (this.winChecker.checkForWin(currentPlayer)) {
                this.board.printBoard();
                console.log(`${currentPlayer.name} vinner!`);
                break;
            }

            if (this.board.isFull()) {
                this.board.printBoard();
                console.log('Det är oavgjort!');
                break;
            }

            this.currentPlayerIndex = 1 - this.currentPlayerIndex; // Växla spelare
        }
    }

    private getMoveColumn(player: Player): number {
        let column: number;
        do {
            column = parseInt(this.prompt(`${player.name} (${player.symbol}), välj en kolumn (0-${this.board['columns'] - 1}): `));
        } while (isNaN(column) || column < 0 || column >= this.board['columns']);
        return column;
    }
}
