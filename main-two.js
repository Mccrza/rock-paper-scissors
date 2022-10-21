// Return results, don't console.log()

// Return random "Rock" "Paper" "Scissors"
let computerSelection = (function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
})();

// Prompt player to enter their move, stores move in variable
let playerSelection = (function getPlayerChoice() {
    let playerPrompt = prompt("What is your move?");
    let playerPromptInput = playerPrompt.toLowerCase();
    return playerPromptInput;
})();

// Play one round, evaluate results & declare winner, repeat x5
function game() {
  for (let i = 0; i < 5; i++) {
    swtich (playRound(playerSelection, computerSelection)) {
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            alert(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).}.`);
            break;
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            alert(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).}`);
            break;
        case (playerSelection === computerSelection):
            alert(`The result is a draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)`} ties ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).}`);
    }
  }
}
// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
