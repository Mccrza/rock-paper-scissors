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
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 1;
    alert(
      `You win! Your ${playerSelection.toUpperCase()} beats MasterControl's ${computerSelection.toUpperCase()}.`
    );
  } else if (playerSelection == "scissors" && computerSelection === "paper") {
    playerScore += 1;
    alert(
      `You win! Your ${playerSelection.toUpperCase()} beat MasterControl's ${computerSelection.toUpperCase()}.`
    );
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
    alert(
      `You lose! MasterControl's ${computerSelection.toUpperCase()} beats your ${playerSelection.toUpperCase()}.`
    );
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    alert(
      `You lose! MasterControl's ${computerSelection.toUpperCase()} beat your ${playerSelection.toUpperCase()}.`
    );
  } else if (playerSelection === computerSelection) {
    playerScore += 1;
    computerScore += 1;
    alert(
      `The result is a draw! Your ${playerSelection.toUpperCase()} ties with MasterControl's ${computerSelection.toUpperCase()}.`
    );
  } else {
    computerScore += 1;
    alert(
      `You lose! MasterControl's ${computerSelection.toUpperCase()} beats your ...${playerSelection.toUpperCase()}.`
    );
  }
}

function game() {
  {
    for (i = 0; i < 5; i++) {
      const computerSelection = getComputerChoice();
      const playerSelection = getPlayerChoice();
      playRound(playerSelection, computerSelection);
    }
    compareScore(playerScore, computerScore);
  }
}

function compareScore() {
  if (playerScore > computerScore) {
    alert(
      `Victory is yours! SCORE:  You - [ ${playerScore} ] pts vs MasterControl - [ ${computerScore} ] pts`
    );
  } else {
    alert(
      `You've suffered a crushing defeat... SCORE:  You - [ ${playerScore} ] pts vs MasterControl - [ ${computerScore} ] pts`
    );
  }
}

let playerScore = 0;
let computerScore = 0;

game();
