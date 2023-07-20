// Wait for the DOM to finish loading before running the game
// Get the cards and add event listeners to every single card

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.addEventListener("click", flipCard);
  }
});

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");

  //first and second card clicks
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;
  }
}
