console.log("Guessing Game");

// When the user starts the game,
// generate random number,
// enable game input and button,
// change start -> reset
// starting the stopwatch
// When a user guesses
// Read their input value
// Make sure it's a number between 1 and 100
// Evaluate the number
// for correctness,
// or too high,
// or too low
// Give feedback
// If correct,
// stop the game with option to play again, making sure to stop the clock
// add current game time and score to history array
// add time and score to history list on dom

// GAME VALUES

// Number to guess
let correctNumber;
// Game score
let score;
// Game Seconds
let seconds;
// Game Clock (interval)
let clock;
// Game History
let history = [];

// DOM Selections
let form = document.getElementsByTagName("form")[0];
let input = document.getElementById("guess");
let feedback = document.getElementById("feedback");
let startBtn = document.getElementById("startBtn");
let submitBtn = document.getElementById("submitBtn");
let clockP = document.getElementById("clock");
let gameHistory = document.getElementById("gameHistory");

startBtn.addEventListener("click", startGame);

form.addEventListener("submit", evaluateGuess);

// GAME FUNCTIONS
function startGame() {
  seconds = 15;
  score = 10;
  correctNumber = Math.floor(Math.random() * 100) + 1;
  displayFeedback("Start of new game");
  input.disabled = false;
  submitBtn.disabled = false;
  startBtn.textContent = "Reset";
  clock = setInterval(updateClock, 1000);
}

function stopGame(didWin = false) {
  if (didWin) {
    history.push({ score, seconds });
    gameHistory.innerHTML += `<li>${new Date().toLocaleTimeString()} || Time: ${seconds}, Score: ${score}</li>`;
  }
  input.disabled = true;
  submitBtn.disabled = true;
  startBtn.textContent = "Start";
  clearInterval(clock);
}

function updateClock() {
  seconds--;
  clockP.textContent = `Time: ${seconds}, Guesses: ${score}`;
  if (seconds == 0) {
    displayFeedback("GAME OVER! You ran out of time!");
    stopGame();
  }
}

function displayFeedback(msg) {
  feedback.textContent = msg;
}

function evaluateGuess(event) {
  // Prevent the default behavior for a form submission
  event.preventDefault();

  score--;

  let guess = parseInt(input.value);

  // Check if guess is invalid
  if (isNaN(guess) || guess > 100 || guess < 1) {
    if (isNaN(guess)) {
      displayFeedback("You didn't give me a valid number. Try again.");
    } else {
      displayFeedback(
        "You didn't give me a number between 1 and 100. Try again."
      );
    }
  } else {
    // Guess is a valid input
    // Check for correctness
    if (guess == correctNumber) {
      displayFeedback(`Congratulations! You scored ${score}!`);
      return stopGame(true);
    } else if (guess > correctNumber) {
      displayFeedback("Too high. Try again.");
    } else {
      displayFeedback("Too low. Try again.");
    }

    clockP.textContent = `Time: ${seconds}, Guesses: ${score}`;

    if (score == 0) {
      displayFeedback("GAME OVER! You ran out of guesses!");
      stopGame();
    }
  }

  input.value = "";
}
