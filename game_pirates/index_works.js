const gridContainer = document.querySelector(".grid-container");
let cards = [];
// let firstCard, secondCard;
// let lockBoard = false;
let score;
let currentPlayer;

document.querySelector(".score").textContent = score;
//credit: memory game javascript academy
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
    //   resetBoard();
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
    <div class ="front">
      <img class = "front-image" src=${card.image} />
    </div>
    <div class ="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}
// cardEl = document.querySelector("div");
class Pirate{
    constructor(name, color, treasures, bombs, scores){
        
        this.name = name;
        this.color = color;
        this.treasure =0;
        this.bombs=0;
        this.scores=100;
        // this.flipCard= this.playCard.bind(this)
    }
    playCard(cardEl) {
        console.log('abc')
        console.log(`${this.name} played card ${cardEl.dataset.name}`)
        alert(`${this.name} played card ${cardEl.dataset.name}`)
    }
}

// cardEl.addEventListener('click', function(event) {
//     console.log (`Ye opened : ${event.target.dataset}`);
//     alert(`Ye opened : ${event.target.dataset}`);
// }) 
// flipCard(cardEl){
//         if (cardEl.)

//         //unflipped the card (turn it over to deck face)
//         setTimeout(()=> { 
//             cardEl.classList.remove('flipped');
//         }, 1000);
//     };
const pirates =[
    {name: 'Red Beard', color: 'red', value: 'opt-1'},
    {name: 'Green John Silver', color: 'green', value: 'opt-2'}
];

// currentPlayer =document.querySelector('input[name="player-type"]:checked');
//   if (!currentPlayer) {
//     alert('Please select a pirate before flipping a card');
//     return;
//   }
//   const selectedPirate = pirates.find((pirate)=>pirate.value === currentPlayer.value);

function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

  currentPlayer =document.querySelector('input[name="player-type"]:checked');
  if (!currentPlayer) {
    alert('Please select a pirate before flipping a card');
    return;
  }
  const selectedPirate = pirates.find((pirate)=>pirate.value === currentPlayer.value);
//   selectedPirate.playCard(this);
  this.classList.add("flipped");
    score = currentPlayer.scores;
    if ((this.dataset.name ==='bomb1') || (this.dataset.name ==='bomb2') ) {
    currentPlayer.scores-=100;
    alert(`${currentPlayer.scores}`)
    alert(`${selectedPirate.name} just lost 100 scores`);   
    } else if ((this.dataset.name=== 'blue-treasure') || (this.dataset.name=== 'red-treasure') || (this.dataset.name=== 'yellow-treasure')) {
        currentPlayer.treasures+=1;
    alert(`Aha, found a treasure! ${selectedPirate.name} now has ${currentPlayer.treasures} treasure(s)! `);   
    }
    setTimeout(() => {
        this.classList.remove('flipped');
        
        // resetBoard();
      }, 1000);
//   secondCard = this;
//   score++;
  document.querySelector(".score").textContent = score;
//   lockBoard = true;
//   checkForMatch();

}

// function checkForMatch() {
//   let isMatch = firstCard.dataset.name === secondCard.dataset.name;
//   isMatch ? disabledCards() : unflipCards();

//   //   if (isMatch) {
//   //     disableCards();

//   // } else {  
//   //     unflipCards();
//   //   }
// }

// function disabledCards() {
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);
//   resetBoard();
// }

function unflipCards() {
  setTimeout(() => {
    this.classList.remove('flipped');
    
    // resetBoard();
  }, 1000);
}

// function resetBoard() {
//   firstCard = null;
//   secondCard = null;
//   lockBoard = false;
// }

function restart() {
//   resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector('.score').textContent = score;
  gridContainer.innerHTML = '';
  generateCards();
}
  // lockBoard = false;
  // setTimeout(() => {
  //   firstCard.classList.remove("flipped");
  //   secondCard.classList.remove("flipped");
  //   resetBoard();
  // }, 1500);
// }



const cardEl = document.querySelector("div");

// pirates[0] = document.querySelector("opt-1")
// pirates[1] =  document.querySelector("opt-2")




// function play() {

// }




     
  
   
    
     
      
       
       


       