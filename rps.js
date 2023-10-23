const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  ran = Math.floor(Math.random() * 3);
  return choice[ran];
}

let rounds = 0;

let playerChoice;
let compWins = 0;
let playerWins = 0;
let result = document.querySelector("#result");
let pWin = document.querySelector("#playerWins");
let cWin = document.querySelector("#compWins");

let rock = document.querySelector("#imgRock");
let paper = document.querySelector("#imgPaper");
let scissors = document.querySelector("#imgScissors");

rock.addEventListener("click", () => {
  playerChoice = "rock";
  result.textContent = playRound();
});

paper.addEventListener("click", () => {
  playerChoice = "paper";
  result.textContent = playRound();
});

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  result.textContent = playRound();
});

function playRound() {
  if (rounds >= 5) {
    localStorage.setItem('player', playerWins);
    localStorage.setItem('computer', compWins);
    window.location.href = 'winner.html';
  }

  ++rounds;
  
  let compChoice = getComputerChoice();

  if (compChoice == playerChoice) {
    return "its a tie";
  } else if (
    (compChoice == "rock" && playerChoice == "scissors") ||
    (compChoice == "paper" && playerChoice == "rock") ||
    (compChoice == "scissors" && playerChoice == "paper")
  ) {
    ++compWins;
    cWin.textContent = compWins;
    return "computer won";
  } else {
    ++playerWins;
    pWin.textContent = playerWins;
    return "player won";
  }
}

