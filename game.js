document.addEventListener("DOMContentLoaded", function () {
  var guessInput = document.getElementById("guess");
  var checkButton = document.getElementById("check");
  var messageDisplay = document.getElementById("message");

  var secretNumber = Math.floor(Math.random() * 50) + 1;
  var attempts = 0;

  function checkGuess() {
    var guess = parseInt(guessInput.value);
    attempts++;

    if (guess < secretNumber) {
      messageDisplay.textContent = "Too low! Guess higher.";
    } else if (guess > secretNumber) {
      messageDisplay.textContent = "Too high! Guess lower.";
    } else {
      messageDisplay.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
      guessInput.disabled = true;
      checkButton.disabled = true;
    }
  }

  checkButton.addEventListener("click", checkGuess);
});
