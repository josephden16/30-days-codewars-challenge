"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakesLadders = void 0;
var SnakesLadders = /** @class */ (function () {
    function SnakesLadders() {
        this.gameOver = false;
        this.playersPosition = [0, 0];
        this.currentPlayer = 1;
        this.snakePositions = {
            "16": 7,
            "46": 25,
            "49": 11,
            "62": 19,
            "64": 60,
            "74": 53,
            "89": 68,
            "92": 88,
            "95": 75,
            "99": 80,
        };
        this.ladderPositions = {
            "2": 38,
            "7": 14,
            "8": 31,
            "15": 26,
            "21": 42,
            "28": 84,
            "36": 44,
            "51": 67,
            "71": 91,
            "78": 98,
            "87": 94,
        };
    }
    SnakesLadders.prototype.play = function (die1, die2) {
        var currentPlayer = this.currentPlayer;
        var playerCurrentPosition = this.playersPosition[currentPlayer - 1];
        var stepsToMove = die1 + die2;
        playerCurrentPosition += stepsToMove;
        this.playersPosition[currentPlayer - 1] = playerCurrentPosition; // add the steps played
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // alternate the current player
        if (this.gameOver) {
            return "Game over!";
        }
        if (die1 === die2) {
            // give the player another go if they roll the same die
            this.currentPlayer = currentPlayer;
        }
        // check if the the player is in where a snake is located
        if (String(playerCurrentPosition) in this.snakePositions) {
            playerCurrentPosition =
                this.snakePositions[playerCurrentPosition.toString()];
        }
        // check if the player is in where a ladder is located
        if (String(playerCurrentPosition) in this.ladderPositions) {
            playerCurrentPosition =
                this.ladderPositions[playerCurrentPosition.toString()];
        }
        // check if the player has moved ahead of the finish position
        if (playerCurrentPosition > 100) {
            var stepsAhead = playerCurrentPosition - 100;
            playerCurrentPosition -= stepsAhead;
        }
        // check if the player is in the finish position
        if (playerCurrentPosition === 100) {
            this.gameOver = true;
            return "Player " + currentPlayer + " Wins!";
        }
        // after all checks update the player's current position
        this.playersPosition[currentPlayer - 1] = playerCurrentPosition;
        return "Player " + currentPlayer + " is on square " + playerCurrentPosition;
    };
    return SnakesLadders;
}());
exports.SnakesLadders = SnakesLadders;
var game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
console.log(game.play(1, 1));
