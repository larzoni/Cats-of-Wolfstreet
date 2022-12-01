
// import
import { getScore, getName } from "../store.js";
// import

// variables
const doors = document.querySelectorAll(".doors");
const backdrop = document.getElementById("backdrop");
const doorSound = document.getElementById("door-sound");
const wrongAnswer = document.getElementById("wrong-answer");
const exitGame = document.getElementById("exit-game");
const userScore = document.getElementById('scoreCounter')


const userName = getName()
const scoreUser = getScore()
let randomNumLink = Math.floor(Math.random() * 3) + 1;
let randomNumGame = Math.floor(Math.random() * 3);
userScore.innerHTML = `${userName}: ${scoreUser}`


// variables

// door opening sound

doors.forEach((door) => {
  door.onclick = () => {
    doorSound.play();
    setTimeout(() => {
      window.location.href = `../game${randomNumLink}/game${randomNumLink}.html`;
    }, 1500);
  };
});
// door opening sound

const falseDoor = () => {
  const selectDoor = doors[randomNumGame];
  console.log(selectDoor);
  selectDoor.src = `../images/door-stage-2.png`;
  selectDoor.onclick = () => {
    doorSound.play();
    setTimeout(() => {
      wrongAnswer.style.animationPlayState = "running";
      wrongAnswer.classList.remove("inactive");
      backdrop.classList.remove("inactive");
    }, 1500);
  };
};
falseDoor();

exitGame.onclick = () => {
  window.location.href = "../scoreboard/index.html";
};
