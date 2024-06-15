// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);

    function handleCellClick(event) {
        const index = event.target.dataset.index;

        if (!board[index]) {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            if (checkWinner(currentPlayer)) {
                setTimeout(() => alert(`${currentPlayer} wins!`), 100); // Delay to show the last move
                resetGame();
            } else if (board.every(cell => cell)) {
                setTimeout(() => alert('It\'s a draw!'), 100); // Delay to show the last move
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWinner(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    function resetGame() {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }
});