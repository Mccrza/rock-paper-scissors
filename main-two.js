function game() {
  for (let i = 0; i < 5; i++) {
    function playRound() {
      function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;
      }
      function getPlayerChoice() {
        let playerPrompt = prompt("What is your move?");
        let playerChoice = playerPrompt.toLowerCase();
        return playerChoice;
      }
      let playerSelection = getPlayerChoice();
      let computerSelection = getComputerChoice();
      function playRound() {
        if (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || playerSelection === "scissors" && computerSelection === "paper") {
          alert(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection "scissors" && computerSelection === "rock" ) {
          alert(`You lose! ${computerSelection} beats ${playerSelection}.`); 
        } else if (playerSelection === computerSelection) {
          alert(`The result is a draw! ${playerSelection} ties ${computerSelection}.`)
        }
      }
    }
  }
}