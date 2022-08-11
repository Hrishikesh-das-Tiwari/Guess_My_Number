"use strict";

let highScore = 0;
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Function to display Message
const display = function (message) {
  document.querySelector(".message").textContent = message;
};

//Event Listener to Check the Number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  score -= 1;
  //When no input is selected
  if (!guess) {
    display("⛔️ No Number");
  }
  //When player won (Match)
  else if (guess === secretNumber) {
    score += 1;
    display("Correct Number");
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  //When input is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      display(guess > secretNumber ? "Too High" : "Too Low");
    } else {
      display("You lost the game");
      score = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  document.querySelector(".score").textContent = score;
});

//Event Listener for Again button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  display("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
