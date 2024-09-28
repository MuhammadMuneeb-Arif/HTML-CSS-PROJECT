const gameBoard = document.getElementById('gameBoard') as HTMLDivElement;
const restartButton = document.getElementById('restartButton') as HTMLDivElement;
const statusMessage = document.getElementById('statusMessage') as HTMLParagraphElement;
const cells = document.querySelectorAll('[data-cell]') as NodeListOf<HTMLDivElement>;

let isXTurn = true;
let gameActive = true;
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

function startGame() {
    isXTurn = true;
    gameActive = true;
    statusMessage.textContent = `Player X's turn`;
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e: Event) {
    const cell = e.target as HTMLDivElement;
    const currentClass = isXTurn ? 'x' : 'o';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        gameOver(false);
    } else if (isDraw()) {
        gameOver(true);
    } else {
        swapTurns();
    }
}

function placeMark(cell: HTMLDivElement, currentClass: string) {
    cell.textContent = currentClass.toUpperCase();
    cell.classList.add(currentClass);
}

function swapTurns() {
    isXTurn = !isXTurn;
    statusMessage.textContent = `Player ${isXTurn ? 'X' : 'O'}'s turn`;
}

function checkWin(currentClass: string) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
}

function gameOver(draw: boolean) {
    if (draw) {
        statusMessage.textContent = 'Draw!';
    } else {
        statusMessage.textContent = `Player ${isXTurn ? 'X' : 'O'} Wins!`;
    }
    gameActive = false;
}

restartButton.addEventListener('click', startGame);

startGame();
