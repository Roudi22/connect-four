"use strict";
// Game.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Board_1 = require("./Board");
const WinChecker_1 = require("./WinChecker");
const Player_1 = require("./Player");
const Move_1 = require("./Move");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Game {
    constructor(player1Name, player2Name) {
        this.currentPlayerIndex = 0;
        const player1 = new Player_1.Player(player1Name, 'X');
        const player2 = new Player_1.Player(player2Name, 'O');
        this.players = [player1, player2];
        this.board = new Board_1.Board();
        this.winChecker = new WinChecker_1.WinChecker(this.board);
        this.prompt = (0, prompt_sync_1.default)(); // Detta initialiserar prompt-sync
    }
    start() {
        while (true) {
            this.board.printBoard();
            const currentPlayer = this.players[this.currentPlayerIndex];
            const moveColumn = this.getMoveColumn(currentPlayer);
            if (!this.board.makeMove(new Move_1.Move(currentPlayer, moveColumn))) {
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
    getMoveColumn(player) {
        let column;
        do {
            column = parseInt(this.prompt(`${player.name} (${player.symbol}), välj en kolumn (0-${this.board['columns'] - 1}): `));
        } while (isNaN(column) || column < 0 || column >= this.board['columns']);
        return column;
    }
}
exports.Game = Game;
