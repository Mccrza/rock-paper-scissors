function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  let playerPrompt = prompt("What is your goddamned move");
  let playerChoice = playerPrompt.toLowerCase();
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert(`You win! ${playerSelection} beats ${computerSelection}.`);
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (playerSelection === computerSelection) {
    alert(
      `The result is a draw! ${playerSelection} ties ${computerSelection}.`
    );
  }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);
