import { increaseScore } from "../store.js";
import { goToDoors, goToScoreboard } from "../navigation.js";

//SOUNDS
let playDJ = function () {
  document.getElementById("djAudio").play();
};
let playDog = function () {
  document.getElementById("dogAudio").play();
};
let playCat = function () {
  document.getElementById("catAudio").play();
};
let playMouse = function () {
  document.getElementById("mouseAudio").play();
};

//OTHER VARIABLES

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `You: ${player}`;
    computerText.textContent = `The other candidate: ${computer}`;
    resultText.textContent = checkWinner();
    console.log(resultText.textContent);
    if (resultText.textContent === "You Win!") {
      setTimeout(() => {
        increaseScore();
        goToDoors();
      }, 1500);
    } else if (resultText.textContent === "You Lose!") {
      setTimeout(() => {
        goToScoreboard();
      }, 1500);
    }
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "DOG";
      break;
    case 2:
      computer = "CAT";
      break;
    case 3:
      computer = "MOUSE";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "DOG") {
    return player == "MOUSE" ? "You Win!" : "You Lose!";
  } else if (computer == "MOUSE") {
    return player == "CAT" ? "You Win!" : "You Lose!";
  } else if (computer == "CAT") {
    return player == "DOG" ? "You Win!" : "You Lose!";
  }
}

console.log(checkWinner());
