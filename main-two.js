// Return results, don't console.log()

// Return random "Rock" "Paper" "Scissors"
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
}

// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
