const gridContainer = document.querySelector(".grid-container");
let cards = [];
// let firstCard, secondCard;
// let lockBoard = false;
let score;
let currentPlayer = {name: '', color: '', value: '', bombs: 0, treasure: 0, scores: 100};
let gameOver = false;
const pirateStatusEl = document.querySelector("pirate-status")

document.querySelector(".score").textContent = score;

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

const pirates =[
new Pirate('Red Beard', 'red', 0,0,100, 'opt-1'),
new Pirate('Green John Silver', 'green', 0,0,100, 'opt-2')
];


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
for (let i=0; i< 6; i++) {
  for (let j=0; j <3; j++){
    // console.log(`The row is now ${i}, col is ${j}`) ////---testing
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
    // cardElement.addEventListener('dragstart', handleCardElDragStart);
    // cardElement.addEventListener('dragover', handleCardElDragOver);
    // cardElement.addEventListener('drop', handleCardElDrop);
    cardElement.dataset.row = i;
    cardElement.dataset.col = j;
     }
  }
}

const redPirate = document.getElementById('red-pirate');
const greenPirate = document.getElementById('green-pirate');

redPirate.addEventListener('dragstart', handlePieceDragStart);
redPirate.addEventListener('dragover', handlePieceDragOver);
redPirate.addEventListener('drop', handlePieceDrop);

document.getElementById('red-pirate').addEventListener('dragstart', handlePieceDragStart);
document.getElementById('red-pirate').addEventListener('dragstart', handlePieceDragStart);

function handlePieceDragStart(event) {
  const draggedPiece = event.target;
  
  draggedPiece.style.position ='absolute';
  draggedPiece.style.zIndex = 1000 //ensure it is on top
  draggedPiece.style.top = `${event.clientY - draggedPiece.offsetHeight/2}px`
  draggedPiece.style.lef = `${event.clientX - draggedPiece.offsetWidth/2}px`
  
  //append the dragged piece to the container or the doc
  gridContainer.appendChild(draggedPiece);

  //prevent the default drag behavior
  event.dataTransfer.setDragImage(new Image(), 0,0);
  event.dataTransfer.effectAllowed = 'move';

  event.dataTransfer.setData("text/plain", 'piece');
}
function handlePieceDragOver(event) {
  event.preventDefault();
  const targetCard = event.target.closest('.card');

  //ensure it is a valid card
  if (targetCard && !targetCard.classList.contains('occupied'))
  {
      targetCard.classList.add('drop-target');
  }
}

function handlePieceDrop(event) {
  event.preventDefault();
  const draggedCardId=event.dataTransfer.setData.getDate("text/plain");
  const draggedCard = document.getElementById(draggedCardId);
  const targetCard = event.target.closest('.card');

  //check if the drop target is a valid card
if (targetCard && !targetCard.classList.contains('occupied')) {
  //set the player's piece on the target card
  const pieceColor= currentPlayer.color;
  targetCard.classList.add('occupied', pieceColor);
  
  //reset currentPlayer to allow next move
  currentPlayer='null';
}
  targetCard.classList.remove('drop-target')
}

function rollDice() {
  const dice1 = Math.floor(Math.random()*4) +1;
  const dice2 = Math.floor(Math.random()*6) +1;

  if (dice1 ===1) {
    console.log (`Move 'North' ${dice2} spaces`)
    return (`Move 'North' ${dice2} spaces`)
  } else if (dice1 ===2) {
    console.log (`Move 'East' ${dice2} spaces`)
    return (`Move 'East' ${dice2} spaces`)
  } else if (dice1 ===3) {
    console.log (`Move 'South' ${dice2} spaces`)
    return (`Move 'South' ${dice2} spaces`)
  } else if (dice1 ===4) {
    console.log (`Move 'West' ${dice2} spaces`)
    return (`Move 'West' ${dice2} spaces`)
  }
}


const diceRollEl=document.getElementById("btnDiceRoll");

const diceResult= document.querySelector(".move-spaces")
diceRollEl.addEventListener('click', function(event) {
  // console.log('Hello')
  const result = rollDice();
  
  diceResult.textContent= result;

})


function flipCard() {
  currentPlayer =document.querySelector('input[name="player-type"]:checked');
  if (!currentPlayer) {
    // modalContainer.style.visibility= true;
    // modalContainer.style.display= "flex";
    // modalContainer.textContent=`Please select a pirate before flipping a card`
    alert('Please select a pirate before flipping a card');
    return;
  }
  const selectedPirate= pirates.find((pirate)=>pirate.value === currentPlayer.value);
  this.classList.add("flipped");
  setTimeout(() => {
        this.classList.remove('flipped');
      }, 2000);
  checkCard(selectedPirate, this.dataset.name)
    }

function gameWon(selectedPirate) {
      document.getElementById("pirate-talk-id").textContent=`Looks like fortune favor me. Found the coffer of long lost gold!!! ~~~ I won!`;
      document.querySelector("#pirate-status-id").textContent=`${selectedPirate.name}: ${selectedPirate.treasures} treasures; ${selectedPirate.scores} points`
      gameOver = true;
      setTimeout(() => {
      alert(`Game over- ${selectedPirate.name} won. Click 'Restart' to play again`);
      }, 3000);
}
    
function gameLost(selectedPirate) {
      document.querySelector("#pirate-talk-id").textContent=`Shiver me timbers! Looks like me been shot.  Smee, SAVE ME!!!~~~ game over`
      document.querySelector("#pirate-status-id").textContent=`${selectedPirate.name}: ${selectedPirate.treasures} treasures; ${selectedPirate.scores} points`
      gameOver= true;
      setTimeout(()=> {
        alert(`Game over- ${selectedPirate.name} lost. Click 'Restart' to play again`);
      }, 3000);
}    
    
function checkCard(selectedPirate, cardName) { 
  // if (gameLost(selectedPirate) || gameWon(selectedPirate)) return;
  if ((cardName ==='bomb1') || (cardName ==='bomb2') ) {
    selectedPirate.scores -= 50;
      if ( selectedPirate.scores <= 0) { 
        gameLost(selectedPirate);
        return;
      } else if ( selectedPirate.scores >= 0){
      
      document.querySelector("#pirate-talk-id").textContent=`Blimey, who hid a bomb here?`   
      document.querySelector("#pirate-status-id").textContent=`${selectedPirate.name}: ${selectedPirate.treasures} treasures; ${selectedPirate.scores} points`
      } 
      
  } else if ((cardName=== 'blue-treasure') || (cardName=== 'red-treasure') || (cardName=== 'yellow-treasure')) {
      selectedPirate.treasures+=1;
      if (selectedPirate.treasures >=3) {
        
        gameWon(selectedPirate);
        return;
      } else if (selectedPirate.treasures <3) {
       
      document.querySelector("#pirate-talk-id").textContent=`Ahoy, what we got here! Heave ho to this treasure chest!` 
      document.querySelector("#pirate-status-id").textContent=`${selectedPirate.name}: ${selectedPirate.treasures} treasures; ${selectedPirate.scores} points`
    
      }
    } 
    document.querySelector("#pirate-status-id").textContent=`${selectedPirate.name}: ${selectedPirate.treasures} treasures; ${selectedPirate.scores} points`
    
  }

  document.querySelector(".score").textContent = score;
  function isOver() {
    if (gameOver) {
      alert(`Press 'Restart' to restart the game`)
    }
  }

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
  // resetBoard();
  shuffleCards();
  score = 0;
  let currentPlayer = {name: '', color: '', value: '', bombs: 0, treasure: 0, scores: 100};
  document.querySelector('.score').textContent = score;
  gridContainer.innerHTML = '';
  generateCards();
  document.querySelector("#pirate-talk-id").textContent=``;
  document.querySelector("#pirate-status-id").textContent=``;
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




     
  
   
    
     
      
       
       


       