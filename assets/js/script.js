// Wait for the DOM to finish loading before running the game
// Get the cards and add event listeners to every single card

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.addEventListener("click", flipCard);
  }

  shuffleCards();
});

let flippedCard = false;
let firstCard, secondCard;
let freezeGame = false;
let numberOfMatches = 0;
let timeStarted = false;

/** Start timer only when the first card is flipped
 *  to implement this I took inspiration from:
 *  https://stackoverflow.com/questions/68211977/how-to-invoke-a-function-on-only-the-first-click */
function onClick() {
  if (!timeStarted) {
    timeStarted = true;
    timer();
  }
}

function flipCard() {
  onClick();

  if (freezeGame) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  /** Get first and second card info
   *  to implement this I used the following link as reference:
   *  https://marina-ferreira.github.io/tutorials/js/memory-game/#:~:text=if%20(!hasFlippedCard)%20%7B%0A%20%20%20%20%20%20hasFlippedCard%20%3D%20true%3B%0A%20%20%20%20%20%20firstCard%20%3D%20this%3B%0A%2B%20%20%20%20%20return%3B%0A%2B%20%20%20%7D%0A%2B%0A%2B%20%20%20secondCard%20%3D%20this%3B%0A%2B%20%20%20hasFlippedCard%20%3D%20false%3B%0A%2B
   */
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

// Function to check for matches
function checkForMatch() {
  if (firstCard.id === secondCard.id) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    numberOfMatches += 1;
    resetBoard();
  } else {
    freezeGame = true; // Pause flip card function for 500ms

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 500);
  }

  addFlip();

  if (numberOfMatches === 8) showWinOverlay();
}

function resetBoard() {
  [flippedCard, freezeGame] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleCards(cardsArray) {
  cardsArray = [...document.querySelectorAll(".card")];
  // Fisher-Yates Shuffle Algorithm
  for (let i = cardsArray.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    cardsArray[randomIndex].style.order = i;
    cardsArray[i].style.order = randomIndex;
  }
}

/** Setting a timer
 *  to implement this I took inspiration from this link:
 *  https://stackoverflow.com/questions/65954053/why-is-my-memory-game-not-working-i-cant-flip-the-cards-or-make-the-game-start
 */

let time;
let min = 0;
let sec = 0;
let formattedSec = "0";
let count = document.getElementById("timer");

function timer() {
  time = setInterval(function () {
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    // Make the timer format 0:00

    if (sec < 10) {
      count.innerHTML = min + ":" + formattedSec + sec;
    } else {
      count.innerHTML = min + ":" + sec;
    }
  }, 1000); // Each 1 second

  if ((flippedCard = false)) return;
}

function pauseTimer() {
  clearInterval(time);
}

// Add flips count

let flips = 0;
let flipCounter = document.getElementById("flips");

function addFlip() {
  flips++;
  flipCounter.innerHTML = flips;
}

// Implement win pop-up screen
function showWinOverlay() {
  pauseTimer();
  setTimeout(() => {
    document.getElementById("win-game").classList.add("visible");

    totalTime = count.innerHTML;

    document.getElementById("total-moves").innerHTML = flips;
    document.getElementById("total-time").innerHTML = totalTime;
  }, 400);
}

function resetGame() {
  timeStarted = false;
  resetBoard();
  pauseTimer();

  numberOfMatches = 0;

  min = 0;
  sec = -1;
  count.innerHTML = "0:00";
  flips = 0;
  flipCounter.innerHTML = "0";

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("flip");
  }); // Will make all cards turn back down

  shuffleCards();

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", flipCard);
  }); // Will allow click on cards again

  document.getElementById("win-game").classList.remove("visible");
}

let resetButtons = document.querySelectorAll(".restart-button");
resetButtons.forEach((reset) => {
  reset.addEventListener("click", resetGame);
});
