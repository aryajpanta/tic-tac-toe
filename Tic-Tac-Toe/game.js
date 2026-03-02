class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0, tie: 0 };
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.initializeGame();
    }

    initializeGame() {
        this.gameBoardContainer = document.getElementById('game-board');
        this.statusDisplay = document.getElementById('status');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');
        this.scoreTie = document.getElementById('score-tie');
        this.resetGameButton = document.getElementById('reset-game');
        this.resetScoreButton = document.getElementById('reset-score');

        this.resetGameButton.addEventListener('click', () => this.resetGame());
        this.resetScoreButton.addEventListener('click', () => this.resetScores());

        this.renderBoard();
        this.updateStatus();
        this.updateScores();
    }

    renderBoard() {
        this.gameBoardContainer.innerHTML = '';

        this.board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.index = index;

            if (cell) {
                cellElement.textContent = cell;
                cellElement.classList.add('taken', cell.toLowerCase());
            }

            cellElement.addEventListener('click', () => this.handleCellClick(index));
            this.gameBoardContainer.appendChild(cellElement);
        });
    }

    handleCellClick(index) {
        if (this.board[index] !== '' || !this.gameActive) {
            return;
        }

        this.makeMove(index);
        this.checkResult();
    }

    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.renderBoard();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus();
    }

    checkResult() {
        let roundWon = false;

        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            const aCell = this.board[a];
            const bCell = this.board[b];
            const cCell = this.board[c];

            if (aCell === '' || bCell === '' || cCell === '') {
                continue;
            }

            if (aCell === bCell && bCell === cCell) {
                roundWon = true;
                this.highlightWinningCells([a, b, c]);
                break;
            }
        }

        if (roundWon) {
            this.endGame();
            return;
        }

        const roundDraw = !this.board.includes('');
        if (roundDraw) {
            this.endGame(true);
        }
    }

    highlightWinningCells(cells) {
        const cellElements = this.gameBoardContainer.querySelectorAll('.cell');
        cells.forEach(index => {
            cellElements[index].classList.add('winner-line', 'winner');
        });
    }

    endGame(draw = false) {
        this.gameActive = false;

        if (draw) {
            this.statusDisplay.textContent = 'It\'s a tie!';
            this.scores.tie++;
        } else {
            const winner = this.currentPlayer === 'X' ? 'O' : 'X';
            this.statusDisplay.textContent = `${winner} wins!`;
            this.scores[winner]++;
        }

        this.updateScores();
    }

    updateStatus() {
        if (this.gameActive) {
            this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;
        }
    }

    updateScores() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
        this.scoreTie.textContent = this.scores.tie;
    }

    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.renderBoard();
        this.updateStatus();
    }

    resetScores() {
        this.scores = { X: 0, O: 0, tie: 0 };
        this.updateScores();
        this.resetGame();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});