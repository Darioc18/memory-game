// Wait for the DOM to finish loading before running the game
// Get the cards and add event listeners to every single card

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.addEventListener("click", flipCard);
  }
  timer();
  shuffleCards();
});

let flippedCard = false;
let firstCard, secondCard;
let freezeGame = false;
let numberOfMatches = 0;

function flipCard() {
  if (freezeGame) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  //first and second card clicks
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

// function startTimer() {
//   let attFirstCard = firstCard.getAttribute("class");
//   if (attFirstCard === "card flip first") {
//     timer();
//   }
// }

//function to check for matches
function checkForMatch() {
  if (firstCard.id === secondCard.id) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    numberOfMatches += 1;
    resetBoard();
  } else {
    freezeGame = true; //pause flip card function for 500ms

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 500);
  }

  addFlip();
  if (numberOfMatches === 1) showWinOverlay();
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

// setting a timer, I took inspiration from this: https://stackoverflow.com/questions/65954053/why-is-my-memory-game-not-working-i-cant-flip-the-cards-or-make-the-game-start

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
    // make the timer format 0:00

    if (sec < 10) {
      count.innerHTML = min + ":" + formattedSec + sec;
    } else {
      count.innerHTML = min + ":" + sec;
    }
  }, 1000); // each 1 second

  if ((flippedCard = false)) return;
}

function pauseTimer() {
  clearInterval(time);
}

// add flips count
let flips = 0;

function addFlip() {
  let flipCount = document.getElementById("flips");

  flips++;
  flipCount.innerHTML = flips;
}

function showWinOverlay() {
  pauseTimer();
  document.getElementById("win-game").classList.add("visible");
}
