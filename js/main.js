//array to hold cards
const cards = ["queen", "king", "queen", "king"];
//empty array to hold cards that get flipped over
let cardsInPlay = [];
//function to hold loic for card flips
function flipCard(cardId){
    //console log to show which card user flipped
    console.log("User flipped " + cards[cardId]);
    //add the flipped card to cardsInPlay
    cardsInPlay.push(cards[cardId]);
    //statement to check if two cards have been played to check for a match
    if(cardsInPlay.length === 2){
      checkForMatch();
    }
}   
//function to check cards in cardsInPlay for a match
function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
  }else{
      alert("Sorry, try again.");
  }
}
//Call the flip card function
flipCard(0);
flipCard(2);
