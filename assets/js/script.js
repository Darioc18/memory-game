// Wait for the DOM to finish loading before running the game
// Get the cards and add event listeners to every single card

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.addEventListener("click", flipCard);
  }

  shuffleCards();

  let flippedCard = false;
  let firstCard, secondCard;
  let freezeGame = false;
  let numberOfMatches = 0;
  let timeStarted = false;

  let time;
  let min = 0;
  let sec = 0;
  let formattedSec = "0";
  let count = document.getElementById("timer");

  let flips = 0;
  let flipCounter = document.getElementById("flips");

  /** Starts timer only when the first card is flipped.
   *  To implement this I took inspiration from:
   *  https://stackoverflow.com/questions/68211977/how-to-invoke-a-function-on-only-the-first-click */
  function onClick() {
    if (!timeStarted) {
      timeStarted = true;
      timer();
    }
  }

  /** Flips first and second card and stores their info */
  function flipCard() {
    onClick();

    if (freezeGame) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    /** Gets first and second card info.
     *  To implement this I used the following link as reference:
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

  /** Checks for matches */
  function checkForMatch() {
    if (
      firstCard.getAttribute("data-card-id") ===
      secondCard.getAttribute("data-card-id")
    ) {
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

  /** Resets the variables to their original values */
  function resetBoard() {
    [flippedCard, freezeGame] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  /** Shuffles the cards */
  function shuffleCards(cardsArray) {
    cardsArray = [...document.querySelectorAll(".card")];
    // Fisher-Yates Shuffle Algorithm
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randomIndex].style.order = i;
      cardsArray[i].style.order = randomIndex;
    }
  }

  /** Setting a timer.
   *  To implement this I took inspiration from this link:
   *  https://stackoverflow.com/questions/65954053/why-is-my-memory-game-not-working-i-cant-flip-the-cards-or-make-the-game-start
   */
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

  /** Stops the timer */
  function pauseTimer() {
    clearInterval(time);
  }

  // Add flips count

  /** Increases the number of flips in the flip counter */
  function addFlip() {
    flips++;
    flipCounter.innerHTML = flips;
  }

  /** Triggers win pop-up screen */
  function showWinOverlay() {
    pauseTimer();
    setTimeout(() => {
      document.getElementById("win-game").classList.add("visible");

      let totalTime = count.innerHTML;

      document.getElementById("total-moves").innerHTML = flips;
      document.getElementById("total-time").innerHTML = totalTime;
    }, 400);
  }

  /** Flips and shuffle all the cards;
   *  Resets the timer;
   *  Closes the win pop-up screen
   */
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
});
