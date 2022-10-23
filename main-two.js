function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
          
          return computerChoice;
      }  
      let playerSelection = (function getPlayerChoice() {
        let playerPrompt = prompt("Whatx is your move?");
        let playerChoice = playerPrompt.toLowerCase();
        return playerChoice;
      })();
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
    }
  }
}
