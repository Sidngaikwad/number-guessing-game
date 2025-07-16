let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userInput').value);
  const feedback = document.getElementById('feedback');
  const attemptsDisplay = document.getElementById('attempts');

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = " Please enter a number between 1 and 100.";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    feedback.textContent = ` Correct! You guessed the number in ${attempts} attempts.`;
    feedback.style.color = 'green';
  } else if (userGuess < secretNumber) {
    feedback.textContent = " Too low! Try again.";
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = " Too high! Try again.";
    feedback.style.color = 'orange';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}
