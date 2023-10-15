const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  ran = Math.floor(Math.random() * 3);
  return choice[ran];
}

function round(player, computer) {
  player = player.toLowerCase();
  for (var i = 0; i < choice.length; i++) {
    if (player == choice[i] && computer == choice[i]) {
      return "its a tie";
    }

    if (player == "rock" && computer == "paper") {
      return "computer wins";
    }
    if (player == "rock" && computer == "scissors") {
      return "you win";
    }

    if (player == "paper" && computer == "rock") {
      return "you win";
    }
    if (player == "paper" && computer == "scissors") {
      return "computer wins";
    }

    if (player == "scissors" && computer == "rock") {
      return "computer wins";
    }
    if (player == "scissors" && computer == "paper") {
      return "you win";
    }
  }
}

function game() {
  let player1 = 0;
  let player2 = 0;
  input = prompt("enter rock, paper, or scissors.");
  for (i = 0; i < 6; i++) {
    let winner = round(input, getComputerChoice());
    if (winner == "you win") {
      player1 += 1;
      console.log("you have " + player1 + " points.");
    } else if (winner == "computer wins") {
      player2 += 1;
      console.log("computer has " + player2 + " points.");
    } else if (winner == "its a tie") {
      console.log("tied");
    }
  }
  if (player1 > player2) {
    console.log("you win");
  } else if (player2 > player1) {
    console.log("the computer wins");
  } else {
    console.log("no one wins");
  }
}

console.log(game());
