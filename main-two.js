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

// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
