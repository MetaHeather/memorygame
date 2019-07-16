console.log("Up and running!");

//array to hold cards
const cards = ["queen", "king", "queen", "king"];
//empty array to hold cards that get flipped over
const cardsInPlay = [];
//variable to hold first card that user flips
const cardOne = cards[0];
//push the card that the user flipped into the cardsInPlay array
cardsInPlay.push(cardOne);
//console log to verify card flipped added to cardsInPlay
console.log("User flipped " + cardsInPlay[0]);
//variable to hold second card flipped
const cardTwo = cards[1];
//push the card that the user flipped into cardsInPlay
cardsInPlay.push(cardTwo);
//console log to verify card flipped added to cardsInPlay
console.log("User flipped " + cardsInPlay[1]);
//statement to check if two cards have been played to check for a match
if(cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }else{
      alert("Sorry, try again.");
  }
}
