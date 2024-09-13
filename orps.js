getHumanChoice = window.prompt("what is your choice:", "ROCK, PAPER OR SCISSORS");
const stringRandom = ["rock","paper","scissors"];

function getComputerChoice(rock, paper, scissors) {
    const options = stringRandom[Math.floor(Math.random()*stringRandom.length)];

    return options;
}






    /*humanScore = 0;console.log(stringRandom)
computerScore = 0;

function playRound(humanChoice, computerChoice){
  if(humanChoice = r, p, s){
    return(Random.computerChoice)
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

Math.random().toString("Rock").substring("Paper", "Scissors");*/
