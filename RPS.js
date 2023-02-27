const options = ["Rock", "Paper", "Scissors"];

function getComputerSelection(){
const random = [Math.floor(Math.random() * options.length)];
const ComputerSelection = options[random];
console.log(ComputerSelection)
}
