// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
  let userAnswer = $("#input")
    .val()
    .toLowerCase();
  let computerNumber = Math.random();
  let wins = 0;
  console.log(computerNumber);
  if (
    userAnswer !== "rock" &&
    userAnswer !== "scissor" &&
    userAnswer !== "paper"
  ) {
    $("#result").text("That wasn't any of the 3 choices! Please enter again.");
  } else {
    $("#userChoice").text(userAnswer);
    if (computerNumber > 0.33 && computerNumber < 0.66) {
      $("#computerChoice").text("rock");
      if (userAnswer === "rock") {
        $("#result").text("tie!");
      }
      if (userAnswer === "scissor") {
        $("#result").text("you lose...");
      }
      if (userAnswer === "paper") {
        $("#result").text("you win!");      }
    }
    if (computerNumber > 0.66 && computerNumber < 1) {
      $("#computerChoice").text("scissors");
      if (userAnswer === "rock") {
        $("#result").text("you win!");
      }
      if (userAnswer === "scissor") {
        $("#result").text("tie!");
      }
      if (userAnswer === "paper") {
        $("#result").text("you lose...");
      }
    }
    if (computerNumber < 0.33) {
      $("#computerChoice").text("paper");
      if (userAnswer === "rock") {
        $("#result").text("you lose...");
      }
      if (userAnswer === "scissor") {
        $("#result").text("you win!");
      }
      if (userAnswer === "paper") {
        $("#result").text("tie!");
      }
    }
  }
});
