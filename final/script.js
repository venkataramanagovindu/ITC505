document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const size = 5;
    let board = Array.from({ length: size }, () => Array(size).fill(false));

    function createBoard() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('click', () => toggleCells(i, j));
                gameBoard.appendChild(cell);
            }
        }
    }

    function toggleCells(x, y) {
        toggleCell(x, y);
        toggleCell(x + 1, y);
        toggleCell(x - 1, y);
        toggleCell(x, y + 1);
        toggleCell(x, y - 1);
        checkWin();
    }

    function toggleCell(x, y) {
        if (x >= 0 && x < size && y >= 0 && y < size) {
            board[x][y] = !board[x][y];
            const cellIndex = x * size + y;
            const cell = gameBoard.children[cellIndex];
            cell.classList.toggle('is-off');
        }
    }

    function checkWin() {
        if (board.flat().every(cell => cell)) {
            setTimeout(() => alert('You win!'), 100);
        }
    }

    function randomizeBoard() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (Math.random() > 0.5) {
                    toggleCells(i, j);
                }
            }
        }
    }

    createBoard();
    randomizeBoard();
});
