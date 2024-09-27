let randomNumber: number = Math.floor(Math.random() * 100) + 1;
let guessCount: number = 0;

const guessInput = document.getElementById("guessInput") as HTMLInputElement;
const guessBtn = document.getElementById("guessBtn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

function checkGuess() {
  const userGuess: number = Number(guessInput.value);
  guessCount++;

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
  } else if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed it in ${guessCount} tries.`;
    resetGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  guessInput.value = '';
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
}

guessBtn.addEventListener("click", checkGuess);
