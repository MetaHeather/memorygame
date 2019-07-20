//object array to hold cards
const cards = [
  {
      rank : "queen",
      suit : "hearts",
      cardImage: "images/queen-of-hearts.png"
  },
  {
    rank : "queen",
    suit : "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank : "king",
    suit : "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank : "king",
    suit : "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//empty array to hold cards that get flipped over
let cardsInPlay = [];
//function to hold loic for card flips

function flipCard(){
    //get the card id from data-id of the card that was flipped
    let cardId = this.getAttribute('data-id');
    //console log to show which card user flipped
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    //add the flipped card to cardsInPlay
    cardsInPlay.push(cards[cardId].rank);
    //change img src to face of card that was clicked
    this.setAttribute('src', cards[cardId].cardImage);
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

//function to create a new game board
function createBoard (){
  //loops through each card in the array
  for (let i = 0; i < cards.length; i++) {
    //creates an img tag for each card
    let cardElement = document.createElement('img');
    //sets src attributes for each img tag
    cardElement.setAttribute('src','images/back.png');
    //sets data attribute named id to card #
    cardElement.setAttribute('data-id',i);
    //adds click event to each card that will call flip card function
    cardElement.addEventListener("click", flipCard);
    //appends each card to the div with the id game-board
    document.getElementById('game-board').appendChild(cardElement);
  }; 
}

//Call the create board funtion to set cards in place
createBoard();