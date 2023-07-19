// Wait for the DOM to finish loading before running the game
// Get the cards and add event listeners to every single card

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.addEventListener("click", flipCard);
  }
});

function flipCard() {
  this.classList.toggle("flip");
}
