getHumanChoice = window.prompt("what is your choice:", "ROCK, PAPER OR SCISSORS");
const options = ["rock","paper","scissors"];

function getComputerChoice(rock, paper, scissors) {
    const choice = options[Math.floor(Math.random()*options.length)];

    ;
}

function checkWinner(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Tie";}
     
  else if((playerSelection == ""rock" && computerSelection == "scissor")||
    (playerSelection == "scissor" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "rock")
    
    return "Player";

    else{return "Computer";}
  }

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
 if (result == "Tie"){
    return "Its a Tie!"
  }
  else if(result == "Player"){
    return 'You win! $ {playerSelection} beats ${computerSelection}'
  }
else{
  return 'You Lose! ${computerSelection} beats $ {playerSelection}'
}

}


