// Build a game of battling alien spaceships using Javascript.
// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// Example use of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
//   console.log('You have been hit!');
// }

//psuedo code: 
// A game round would look like this:
// You attack the first alien ship---use the attack method to attack the alien ships.
//// If the ship survives, it attacks you---if (alient.hull >0), then alient ship will attack again (alient.attack).
//// If you survive, you attack the ship again--if (this.hull > 0), you attack the alient ship again (this.attack)
// If it survives, it attacks you again ... etc--- use a while loop to compare the this.hull and alient.hull to make sure it is not <0 
//// If you destroy the ship, you have the option to attack the next ship or to retreat --- if you destroy the ship (if alient.hull <= 0), then you have the option to attack the next ship or to retreat) (prompt the user to retreat or attack the next ship) 
// If you retreat (userRetreat.prompt==='yes'&& alient.hull <=0), the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens---if (Alienship[6].hull <=0), game over
// if userRetreat.prompt === 'no' and if (alienships.length > 0) then you can choose to attack the next ship or retreat (if userRetreat.prompt === 'no' && alienship.length > 0)

// class Example {
//   constructor(name){
//     this.name = name
//     this.method = this.method.bind(this)
//   }
//   methodFromExample(){
//    return this.name
//   }
// }
// const btnEl = document.querySelector('button')
// btnEl.addEventListener('click', methodFromExample)
// Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target
// Your spaceship, the USS Assembly should have the following properties:

//constructing the Spaceship class with these porperties
// hull - 20
// firepower - 5
// accuracy - .7

// console.clear;

//Once player enters the game as USS Assembly, it will attack the very first alien ship. Each alien ship's hull and firepower stays the same but it'saccuracy varies at each single attack (if it survives against USS Assembly). It's accuracy can be higher than USS Assembly (.7) or could be worse, depending on the randomizer. If it is destroyed, then our spaceship goes attacking the next alien target ship.

const spaceshipInfoEl = document.getElementById("spaceship info");
const alienInfoEl = document.getElementById("alien info");
const marqueeEl = document.getElementById("marquee");

class HumanSpaceship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7;
    this.attack = this.attack.bind(this)
  }

  attack(anyAlienship) {
    //if our accuracy is less than the alienship[number] accuracy
    alert('!!! Attacking alienship !!!')
    console.log('!!! Attacking alienship !!!')
    if (this.accuracy <= anyAlienship.accuracy) {
      alert(`Aliens->accurate weaponry *** ${this.name} missed *** alienship survived. Darn!\n`);

      console.log(`%cAliens->accurate weaponry *** ${this.name} missed *** alienship survived. Darn!\n`, `color: red; font-size: 20px; background: lightblue; border: 1px solid grey`);

      return anyAlienship.hull;
    } else {
      // alert(`We had a hit! Alienship ${anyAlienship} now has ${anyAlienship.hull}-this.firepower points !`);
      if (anyAlienship.hull > 0) {
        alert(`We had a hit!`);
        console.log(`We had a hit!`);
        if (anyAlienship.hull - this.firepower <= 0) {
          alert(`You destroyed the alienship!\n`);
          console.log(`%cYou destroyed the alienship!\n`, `color: blue; font-size: 30px; background: azure; border: 1px solid grey`);

          return anyAlienship.hull - this.firepower;
        } else {
          alert(`The alienship has ${anyAlienship.hull - this.firepower} points left!\n`);
          console.log(`The alienship has ${anyAlienship.hull - this.firepower} points left!\n`);
          return anyAlienship.hull - this.firepower;
        }
      }
      if ((anyAlienship.hull <= 0) || (anyAlienship.hull - this.firepower <= 0)) {
        marqueeEl.innerHTML = `~~~The alienship has been destroyed! ~~~`
        alert(`~~~The alienship has been destroyed! ~~~`);
        console.log(`%c~~~The alienship has been destroyed! ~~~`, `color: blue; font-size: 30px; background: azure; border: 1px solid grey`);
        // alert(`The alienship has been destroyed!`);
        return;
      }
      // console.log(anyAlienship);
    }
  }

}

//---------------------
//psuedo code: There are 6 alient ships, so we need to have a factory function to create alient ships
// The alien ships should each have the following ranged properties determined randomly:
// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// You could be battling six alien ships each with unique values.

class Alienship {
  constructor(hull, firepower, accuracy) {
    this.hull = Math.floor(Math.random() * (6 - 3) + 3.5);// inclusive 3 - 6
    this.firepower = Math.floor(Math.random() * (4 - 2) + 3.5);//inclusive 2-4
    this.accuracy = 0;//default to 0;
    this.alienAttack = this.alienAttack.bind(this);
  }
  alienAttack(othership) {
    // let alienAttackRate = Math.random();
    // if (alienAttackRate < othership.accuracy) {

    console.log(`!!! Firing missiles at ${othership.name} !!!`)
    alert(`!!! Firing missiles at ${othership.name} !!!`)
    if (this.accuracy <= othership.accuracy) {

      alert(`USS->excellent accuracy.*** Alienship missed!!! ***`);
      console.log(`%c${othership.name}->excellent accuracy.*** Alienship missed!!! ***`, `font-style: italic; color: green; font-size: 30px; background: light green; border: 1px solid grey`);

    } else if (this.accuracy > othership.accuracy) {
      alert(`***The ${othership.name} got hit, assessing the demages...***`);
      console.log(`%c***The ${othership.name} got hit, assessing the demages...***`, `color: red; font-size: 20px; background: #ff9800; border: 1px solid grey`);

      othership.hull = othership.hull - this.firepower;

      if (othership.hull <= 0) {
        marqueeEl.innerHTML = `~~~The alienship won. Game over!~~~`
        alert(`~~~The alienship won. Game over!~~~`);
        console.log(`%c~~~The alienship won. Game over!~~~`, `font-style: italic; color: white; font-size: 40px; background: #f44336; border: 1px solid grey`);
        // alert(`The alienship won. Game over`);

        return;

      } else {
        alert(`The ${othership.name} has ${othership.hull} points left!`);
        console.log(`The ${othership.name} has ${othership.hull} points left!`);
        return othership.hull;
      }
    }
  }
}
const ussAssembly = new HumanSpaceship('USSAssembly');
const alienFleet = [

  new Alienship(),
  new Alienship(),
  new Alienship(),
  new Alienship(),
  new Alienship(),
  new Alienship()
]


console.log(ussAssembly); //logging ussAssembly
// console.log(alienFleet)
// console.log(alienFleet[2])
// 
//create a function to check spaceship's hull, if it's <0, game is over
function checkHull(ship) {
  if (ship.hull < 0) {
    alert(`Game over, ${ship.name} has been destroyed. You lost and the universe is doomed!~~~`);
    console.log(`%c~~~Game over, ${ship.name} has been destroyed. You lost and the universe is doomed!~~~`, `font-style: italic; color: white; font-size: 40px; background: #f44336; border: 1px solid grey`);
    // break;
    return;
  }
  else
    return;
}

function battle(spaceship, alienships) {
  let gameOver = false;
  for (let i in alienships) {

    // spaceshipInfoEl.innerHTML = `USSAssembly-> hull: ${ussAssembly.hull}, firepower: ${ussAssembly.firepower}, accuracy: ${ussAssembly.accuracy} \n `;

    // alienInfoEl.innerHTML = `Alienship[${i}]-> 
    // hull: ${alienships[i].hull} , firepower: ${alienships[i].firepower} , accuracy: ${alienships[i].accuracy}\n `;

    if (gameOver === true) return;
    //display the marquee banner which ship we are battling

    alert(`${spaceship.name} is batting alienship[${i}] to save the universe!`);
    console.log(`${spaceship.name} is batting alienship[${i}] to save the universe!`);
    // alert(`${spaceship.name} is batting alienship[${i}] to save the universe!`);
    //while spaceship hull still has points
    while (spaceship.hull > 0) {
      alienships[i].accuracy = (Math.random() * (.8 - .6) + .6).toFixed(2);//include .6-.8

      spaceshipInfoEl.innerHTML = `USSAssembly-> hull: ${ussAssembly.hull}, firepower: ${ussAssembly.firepower}, accuracy: ${ussAssembly.accuracy} accuracy\n `;

      alienInfoEl.innerHTML = `Alienship[${i}]-> 
      hull: ${alienships[i].hull} , firepower: ${alienships[i].firepower} , accuracy: ${alienships[i].accuracy}\n `;

      console.log(`%cUSSAssembly-> hull: ${ussAssembly.hull}, firepower: ${ussAssembly.firepower}, accuracy: ${ussAssembly.accuracy} \n `, `color: blue; font-size: 30px; background: green; border: 1px solid grey`)
      alert(`USSAssembly-> hull: ${ussAssembly.hull}, firepower: ${ussAssembly.firepower}, accuracy: ${ussAssembly.accuracy} \n `)

      console.log(`%cAlienship[${i}]-> hull: ${alienships[i].hull} , firepower: ${alienships[i].firepower} , accuracy: ${alienships[i].accuracy}\n `, `color: blue; font-size: 30px; background: green; border: 1px solid grey`);
      alert(`Alienship[${i}]-> hull: ${alienships[i].hull} , firepower: ${alienships[i].firepower} , accuracy: ${alienships[i].accuracy}\n `);

      alienships[i].hull = spaceship.attack(alienships[i]);
      if (alienships[i].hull <= 0) {
        alert(`~~~The alienship has been destroyed! ~~~`);
        console.log(`%c~~~The alienship has been destroyed! ~~~`, `color: blue; font-size: 30px; background: azure; border: 1px solid grey`);

        let userRetreat = prompt(`Alienship[${i}] is destroyed. Would you like to retreat? Enter 'y' for yes, and 'n' for 'no'`)
        // let userRetreat = 'n';
        if (userRetreat === 'y' || userRetreat == 'Y') {
          // alert(`You have retreated, ${spaceship.name}. Game is now over!!!`)
          marqueeEl.innerHTML = `You have retreated, ${spaceship.name}. Game is now over!!!`
          console.log(`You have retreated, ${spaceship.name}. Game is now over!!!`);
          alert(`You have retreated, ${spaceship.name}. Game is now over!!!`);
          gameOver = true;
          return;
        } else if (userRetreat === 'n' || userRetreat === 'N' && gameOver === false) {

          console.log(`You have chosen to continue battling, ${spaceship.name}. Good luck!`);
          // alert(`You have chosen to continue battling, ${spaceship.name}. Good luck!`);
          break;
        };
      } else if (alienships[i].hull > 0) {

        alienships[i].alienAttack(spaceship);
        if (spaceship.hull <= 0) {
          console.log('You have lost!')
          gameOver = true;
          return;
        } else {
          console.log("")
          // console.log(`${spaceship.name} hull has ${spaceship.hull} points\n`)  //repeat
        }
      } else if (spaceship.hull <= 0) {
        console.log(`~~~Game over, ${spaceship.name} has been destroyed. The universe is doomed!~~~`);
        gameOver = true;
        // alert(`Game over, ${spaceship.name} has been destroyed. The universe is doomed!`);
        return; //exist the while loop
      }
    }//while loop closing bracket
  }
}
//create a function to check on user answer
// function checkUserPrompt(userAnswer) {
//   if (userAnswer.toLowerCase() !== 'y' || userAnswer.toLowerCase() !== 'n') {
//     // prompt("Please enter either 'y' or 'n' for your answer");
//     console.log("Please enter either 'y' or 'n' for your answer");
//   } else
//     return userAnswer;
// }


document.getElementById('btnStartPrompt').addEventListener('click', function() {
  document.getElementById("spaceship_firing").style.visibility = "visible";
  document.getElementById("spaceship_firing").style.display = "block";
  let userStartPrompt = prompt(`Would you like to play this game? Enter 'y' for yes, and 'n' for no`);
  if (userStartPrompt === 'y' || userStartPrompt === 'Y') {
    alert('Welcome to fighting alien spaceships!');
    // const firing = document.getElementById('spaceship_firing');
    // firing.style.visibility = "visible";


    battle(ussAssembly, alienFleet);
  } else if (userStartPrompt === 'n' || userStartPrompt === 'N') {
    console.log('Game over. Hope to see you next time.')

    alert('Game over. Hope to see you next time.');
  } else if (userStartPrompt !== 'y' || userStartPrompt !== 'Y' || userStartPrompt !== 'n' || userStartPrompt !== 'N') {
    alert('Please enter either "y" or "n" for your answer');
  }

});


// document.getElementById('btnAttackAlien').addEventListener('click', function() {
//   // let userStartPrompt = prompt(`Would you like to continue or start playing this game? Enter 'y' for yes, and 'n' for no? 'y': 'n'`);
//   // alert('You entered ' + userStartPrompt+ '---You are now joining USS Assembly to flight the universe');

//   battle(ussAssembly, alienFleet);
// });



// You attack the first Alienship---use the attack method to attack the Alienship.
  //// If the Alienship survives, it attacks you---if (Alienship[num].hull >0), then alien ship will attack again (alient.attack).
  //// If you survive, you attack the ship again--if (this.hull > 0), you attack the alient ship again (this.attack)
  // If it survives, it attacks you again ... etc--- use a while loop to compare the this.hull and alient.hull to make sure it is not <0
  //// If you destroy the ship, you have the option to attack the next ship or to retreat --- if you destroy the ship (if alient.hull <= 0), then you have the option to attack the next ship or to retreat) (prompt the user to retreat or attack the next ship)
  // If you retreat (userRetreat.prompt==='yes'&& alient.hull <=0), the game is over, perhaps leaving the game open for further developments or options
  // You win the game if you destroy all of the aliens---if (Alienship[6].hull <=0), game over
  // if userRetreat.prompt === 'no' and if (alienships.length > 0) then you can choose to attack the next ship or retreat (if userRetreat.prompt === 'no' && alienship.length > 0)

//-----------------------------
//removing the first pic
// document.addEventListener('DOMContentLoaded', function() {
//   // Wait for the DOM to be fully loaded

//   // Get the alienship container
//   const alienshipContainer = document.getElementById('alienshipId');
//   // Get the first img tag within the alienship container
//   var firstAlienship = alienshipContainer.querySelector('img');
//   // Check if an img tag was found
//   if (firstAlienship) {
//     // Remove the found img element
//     firstAlienship.parentNode.removeChild(firstAlienship);
//   }
// });

// // alienfleetParent.addEventListener("click", function() {
// //   alienImg.removeChild(alienImg.firstElementChild);
// // }


