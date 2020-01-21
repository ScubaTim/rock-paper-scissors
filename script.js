function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  const randomPlay =
    playOptions[Math.floor(Math.random() * playOptions.length)];
  return randomPlay;
}

function playRound(computerSelection, playerSelection) {
  //Convert all inputs to uniform lowercase
  const compMove = computerSelection.toLowerCase();
  const playerMove = playerSelection.toLowerCase();

  //Determine round winner
  if (compMove === "rock" && playerMove === "scissors") {
    return "You lose! Rock beats scissors.";
  } else if (compMove === "paper" && playerMove === "rock") {
    return "You lose! Paper beats rock.";
  } else if (compMove === "scissors" && playerMove === "paper") {
    return "You lose! Scissors beats paper.";
  } else {
    return "You are the winner!";
  }
}

const playerSelection = "PaPer";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));