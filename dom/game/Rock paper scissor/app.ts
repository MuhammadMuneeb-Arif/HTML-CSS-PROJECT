const userScoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');
let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = playRound(userChoice, computerChoice);
        updateResult(result, userChoice, computerChoice);
    });
});

function playRound(userChoice: string, computerChoice: string): string {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function updateResult(result: string, userChoice: string, computerChoice: string) {
    resultEl!.innerHTML = `You chose <strong>${userChoice}</strong>, computer chose <strong>${computerChoice}</strong>. ${result}`;
    userScoreEl!.innerHTML = `Score: You ${userScore} - ${computerScore} Computer`;
}
