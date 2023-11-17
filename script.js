let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  const myTitle = document.getElementById("main-title");
  myTitle.textContent = "Mishelle's DOM Practice!";

  // Part 2
  // Select the bodyand change the background-color to a new color of your choice.
  // const myBody = document.getElementById("body")

  const myBody = document.querySelector("body");
  myBody.style.backgroundColor = '#6ae2da';
  
  // Part 3 Select DOM's Favorite Things list and remove the last list item.
    const myFavo = document.getElementById("favorite-things");
  myFavo.removeChild(myFavo.lastElementChild);
    // solution using ByTagName 
  // const listItems = myFavo.getElementsByTagName("li");
  // myFavo.removeChild(listItems[listItems.length - 1]);
  


  // Part 4

  //Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements

  //Quote of the day will change color but DOM Adven will not
  //bc ouote of the day has a hover and hover changes color
  const spTitle = document.getElementsByClassName("special-title");
  for (let i = 0; i < spTitle.length; i++) {
    spTitle[i].style.fontSize = "2rem";
    spTitle[i].style.color = "yellow";
    // spTitle[i].style.backgroundColor ="orange";
  }

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  const pastRacesPlaces = document.querySelectorAll("#past-races li");
  const cityToRemove = ["Chicago", "chicago"];

  //doesn't work
  // Array.from(pastRacesPlaces).forEach(race => {
  //   console.log(race.textContent.toLowerCase()); // Log the lowercase text for debugging
  //   if (cityToRemove.includes(race.textContent.toLowerCase())) {
  //     console.log('Removing:', race.textContent); // Log the removal for debugging
  //     race.parentNode.removeChild(race);
  //   }
  // });

  //forEach solution
  //   const pastRacesPlaces = document.querySelectorAll('#past-races li');
  //   const cityToRemove = ['Chicago'];
  //   // pastRacesPlaces.forEach(race => {
  //   //   if (cityToRemove.includes(race.textContent)) {
  //   //     race.remove();
  //   //   }
  //   // });

  for (let i = 0; i < pastRacesPlaces.length; i++)
    if (cityToRemove.includes(pastRacesPlaces[i].textContent)) {
      console.log("Removing:", pastRacesPlaces[i].textContent);
      pastRacesPlaces[i].remove();
    }

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

  const newCity = document.createElement("li");
  const DCNode = document.createTextNode("Washington DC");
  newCity.appendChild(DCNode);
  document.getElementById("past-races").append(DCNode);

  // Part 7
  // Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
  const dcBlogPost = document.createElement("div");
  dcBlogPost.classList.add("blog-post", "purple");

  // dcBlogPost.innerHTML =`<h1>Washington DC</h1>
  // <p>Washington DC is the capital of the United States of America.</p>`;
  // console.log(dcBlogPost.innerHTML)

  const dcBlogPosth1Text = document.createTextNode("Washington DC");
  const dcBlogPostTitleNode = document.createTextNode("---yeah"); //what is this?
  // dcBlogPost.textContent = "I didn't meet the Pesident in the White House";//smaller font and on top of the title
  const h1 = document.createElement("h1");
  h1.textContent = "Washinton D.C";
  const p = document.createElement("p");
  p.textContent =
    "I PARKED MY CAR AND RODE A SCOOTER AROUND THE WHITE HOUSe";

  dcBlogPost.appendChild(h1);
  dcBlogPost.appendChild(p);

  const main = document.querySelector(".main");
  main.appendChild(dcBlogPost);

  /* Part 8 This is the random quote generator--
  const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
   };
  Please use query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked. */

  //  const quoteTitle = document.querySelector('quote-title');

  // function clickHandler(event) {
  //   console.log('Randomizing a quote now...')
  // }
  //   quoteTitle.addEventListener('click', clickHandler);

  const quoteTitleEl = document.querySelector("#quote-title");
  quoteTitleEl.addEventListener("click", function (event) {
    console.log("Console.logging: You are clicking on the randomizer function...");
    quoteTitleEl.textContent = `Randomizing a quote now:`;

    // quoteTitleEl.textContent ='';
    randomQuote();
  });

  /* Part 9
  Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

  The mouseout handler should toggle the class .purple
  The mouseenterhandler should toggle the class .red
   Test it out! */
  // const blogPostEl = document.querySelectorAll('.blog-post.purple');
  // blogPostEl.classList.color = "red";

  // blogPostEl.addEventListener("mouseout", function (event) {
  //   blogPostEl.forEach(link=> {
  //     link.target.classList.toggle('purple')
  //   })
  // })
  // blogPostEl.addEventListener("mouseenter", function(event) {
  //     // blogPostEl.forEach(linkEl=> {
  //     //   linkEl.classList.toggle('red')
  //     //   })
  //   event.target.style.color ='red'
  //   })

  // Hint: Remember the document node property .classList and the document node method .toggle().
  // const element = document.getElementsByClassName("blog-post purple");//--won't work
  
  // const element = document.querySelectorAll(".blog-post");
  const element = document.querySelectorAll(".blog-post.purple");
  element.forEach(function(element) {
    element.addEventListener("mouseout", function(event) {
      // element.classList.toggle("purple");
      element.classList.toggle("red");
    });
  })
  element.forEach(function(element) {
    element.addEventListener("mouseenter", function(event) {
      element.classList.toggle("purple");
      // element.classList.toggle("red");
    });
  })

  
});
