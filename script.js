function game() {
  const playOptions = ["rock", "paper", "scissors"];
  const playerSelection = prompt("Rock, Paper, or Scissors?");
  const computerSelection = computerPlay();
  const compMove = computerSelection.toLowerCase();
  const playerMove = playerSelection.toLowerCase();


  function computerPlay() {
    const randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    console.log(randomPlay);
    return randomPlay;
  };

  function playRound() {
    console.log(playerMove);
    if (compMove === "rock" && playerMove === "scissors") {
      return "You lose! Rock beats scissors.";
    } else if (compMove === "paper" && playerMove === "rock") {
      return "You lose! Paper beats rock.";
    } else if (compMove === "scissors" && playerMove === "paper") {
      return "You lose! Scissors beats paper."
    } else if (compMove === playerMove) {
      return "It's a tie!"
    } else if (playerMove === ("rock", "paper", "scissors")) {
      return "You are the winner!";
    } else {
      return "You did something wrong."
    }
  };
  console.log(playRound());
};

game();