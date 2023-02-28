const options = ["rock", "paper", "scissors"];

function getComputerSelection(){
  const random = [Math.floor(Math.random() * options.length)];
  const computerChoice = options[random];
  return computerChoice;
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

playRound(playerSelection, computerSelection);

console.log(playRound);

