var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;
var guessInput = document.getElementById("guessInput");
var guessBtn = document.getElementById("guessBtn");
var message = document.getElementById("message");
function checkGuess() {
    var userGuess = Number(guessInput.value);
    guessCount++;
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
    }
    else if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed it in ".concat(guessCount, " tries.");
        resetGame();
    }
    else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    }
    else {
        message.textContent = "Too high! Try again.";
    }
    guessInput.value = '';
}
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
}
guessBtn.addEventListener("click", checkGuess);
