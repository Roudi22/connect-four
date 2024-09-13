// Game.ts

import { Board } from './Board';
import { WinChecker } from './WinChecker';
import { Player } from './Player';
import { ComputerPlayer } from './ComputerPlayer';
import { Move } from './Move';
import promptSync from 'prompt-sync';

export class Game {
    private board: Board;
    private winChecker: WinChecker;
    private players: [Player, Player];
    private currentPlayerIndex: number = 0;
    private prompt: Function;

    constructor() {
        this.prompt = promptSync(); // Initialize prompt-sync
        this.board = new Board();
        this.winChecker = new WinChecker(this.board);
        this.players = this.initializePlayers();
    }

    private initializePlayers(): [Player, Player] {
        const gameMode = this.prompt('Välj spelläge: 1 för människa mot människa, 2 för människa mot dator: ');

        const player1Name = this.prompt('Ange namn för spelare 1: ');
        const player1 = new Player(player1Name, 'X');

        if (gameMode === '2') {
            const player2 = new ComputerPlayer('Dator', 'O');
            return [player1, player2];
        } else {
            const player2Name = this.prompt('Ange namn för spelare 2: ');
            const player2 = new Player(player2Name, 'O');
            return [player1, player2];
        }
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
        if (player instanceof ComputerPlayer) {
            return player.getMove(this.board);
        } else {
            let column: number;
            do {
                column = parseInt(this.prompt(`${player.name} (${player.symbol}), välj en kolumn (0-${this.board['columns'] - 1}): `));
            } while (isNaN(column) || column < 0 || column >= this.board['columns']);
            return column;
        }
    }
}