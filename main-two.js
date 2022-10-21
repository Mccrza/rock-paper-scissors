// Return results, don't console.log()

// Return random "Rock" "Paper" "Scissors"
let computerSelection;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

// Must call getComputerChoice() for computerSelection to be logged
getComputerChoice();
console.log(computerSelection);

let playerPrompt = prompt("What is your move?");
let playerSelection = playerPrompt.toLowerCase();

function playRound(playerSelection, computerSelection) {}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
