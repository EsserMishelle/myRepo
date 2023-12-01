const gridContainer = document.querySelector(".grid-container");
let cards = [];
// let firstCard, secondCard;
// let lockBoard = false;
let score;
let currentPlayer = {name: '', color: '', value: '', bombs: 0, treasure: 0, scores: 100};


document.querySelector(".score").textContent = score;
//credit: memory game javascript academy
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    console.log("loaded: ", cards); 
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

// resetBoard();

for (let i=0; i< 6; i++) {
  for (let j=0; j <3; j++){
    console.log(`The row is now ${i}, col is ${j}`)
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", cards[i*3+j].name);
    cardElement.innerHTML = `
      <div class ="front">
      <img class = "front-image" src=${cards[i*3+j].image} />
      </div>
      <div class ="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
    cardElement.addEventListener('drag', handleCardElDrag);
    cardElement.dataset.row = i;
    cardElement.dataset.col = j;
     }
  }
}

function handleCardElDrag(event) {
    const draggedCard = event.target;
    const row = draggedCard.dataset.row;
    const col = draggedCard.dataset.cel;
//if no player is selected from the toggle, remind the player to click on the toggle
  if (!currentPlayer) {
    alert('Please select a pirate before dragg your piece to the desired spot');
    return;
  }

//check to see if the cell is empty
  if (draggedCard.classList.contains('occupied')) {
        //place the player's piece
        const pieceColor = players[currentPlayer].color;
        draggedCard.classList.add('occupied', pieceColor);
  }    
}
//   for (let card of cards) {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
//     cardElement.setAttribute("data-name", card.name);
//     cardElement.innerHTML = 
//     <div class ="front">
//       <img class = "front-image" src=${card.image} />
//     </div>
//     <div class ="back"></div>
//     `;
//     gridContainer.appendChild(cardElement);
//     cardElement.addEventListener("click", flipCard);
//   }
// }
// cardEl = document.querySelector("div");
class Pirate{
    constructor(name, color, treasures, bombs, scores, value){
        
        this.name = name;
        this.color = color;
        this.treasures =0;
        this.bombs=0;
        this.scores=100;
        this.value= value;
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
// const pirates =[
//   {name: 'Red Beard', color: 'red', value: 'opt-1'},
//   {name: 'Green John Silver', color: 'green', value: 'opt-2'}
// ];


const pirates =[
 new Pirate('Red Beard', 'red', 0,0,100, 'opt-1'),
 new Pirate('Green John Silver', 'green', 0,0,100, 'opt-2')
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
  const selectedPirate= pirates.find((pirate)=>pirate.value === currentPlayer.value);
//   selectedPirate.playCard(this);
  this.classList.add("flipped");
  score = currentPlayer.scores;
  console.log(currentPlayer)
  if ((this.dataset.name ==='bomb1') || (this.dataset.name ==='bomb2') ) {
      selectedPirate.scores = selectedPirate.scores-100;
    
    alert(`${selectedPirate.name} just lost 100 scores. It is ${selectedPirate.scores}`);   
    } else if ((this.dataset.name=== 'blue-treasure') || (this.dataset.name=== 'red-treasure') || (this.dataset.name=== 'yellow-treasure')) {
        selectedPirate.treasures+=1;
    alert(`Aha, found a treasure! ${selectedPirate.name} now has ${selectedPirate.treasures} treasure(s)! `);   
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

function resetBoard() {
  shuffleCards();
  score = 0;
  document.querySelector('.score').textContent = score;
  gridContainer.innerHTML = '';
  generateCards();
  // currentPlayer =0;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector('.score').textContent = score;
  gridContainer.innerHTML = '';
  generateCards();
  // currentPlayer =0;
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




     
  
   
    
     
      
       
       


       