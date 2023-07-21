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
let freezeGame;

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

//function to check for matches
function checkForMatch() {
  if (firstCard.id === secondCard.id) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  } else {
    freezeGame = true; //pause flip card function for 500ms

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 500);
  }
}

// function to reset......!!!!!!!!!!!!!
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
