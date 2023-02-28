const options = ["rock", "paper", "scissors"];

let playerSelection = prompt("Rock, Paper or Scissors")

function getComputerSelection(){
  const random = [Math.floor(Math.random() * options.length)];
  return computerChoice = options[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    alert("You lose!");
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert("You Win!");
  }
}

const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));

