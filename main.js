// BEGIN
//   FUNCTION getComputerChoice => Randomly return "Rock" "Paper" "Scissors."
//     Makes computer play. Use console.
//   FUNCTION playRound(playerSelection, computerSelection) {
//     RETURN string declares winner, ex: "You lose! Paper beats Rock." playerSelection case insensitive
//
// function playRound(playerSelection, computerSelection) {
// your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

//   FUNCTION game() => FUNCTION playRound => 5 round game, keep score
//      RETURN winner or loser

//   PROMPT() to get input from user

//   LOOPS? "Helper" Functions?

// for (let i = 0; i < 5; i++) {
// your code here!
// }

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);
}

function playerPrompt() {
  prompt("What's your selection?");
  {
    playerSelection = playerPrompt.toLowerCase();
  }
  console.log(playerSelection);

  function playRound(playerSelection, computerSelection) {
    game(i);
    console.log(game());
  }

  function game(i) {
    if (((i = 1), i >= 5, i++)) {
      if (i > 5) {
        return alert("Game Over");
      }
      switch (game()) {
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "rock":
          console.log(
            `You win! ${playerSelection} beats ${computerSelection}.`
          );
          alert(`You win! ${playerSelection} beats ${computerSelection}.`);
          break;
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "scissors" && computerSelection === "rock":
        case playerSelection === "paper" && computerSelection === "scissors":
          console.log(
            `You lose! ${computerSelection} beats ${playerSelection}.`
          );
          alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
          break;
        default:
          console.log(`Draw! ${playerSelection} matches ${computerSelection}.`);
          alert(`Draw! ${playerSelection} matches ${computerSelection}.`);
          return;
      }
      game(i + 1);
    }
    game(1);
  }
}
