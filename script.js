let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainEl = document.getElementById('main-title');
  mainEl.textContent = "DOM's Homepage";

  // Part 2
  document.body.style.backgroundColor = '#b5838d';

  // Part 3
   let favThings = document.getElementById("favorite-things");
   let lastItem = favThings.lastElementChild;
   if(lastItem){
    favThings.removeChild(lastItem);
   }
   
  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
  let specialTl = document.querySelectorAll(".special-title"); 
  for (let i = 0; i < specialTl.length; i++){
    specialTl[i].style.fontSize = '2rem';
  }
  
  // Part 5
let pastRaces = document.querySelectorAll("#past-races li");
for (let i = 0; i < pastRaces.length; i++) {
  if (pastRaces[i].textContent === 'Chicago') {
    pastRaces[i].parentNode.removeChild(pastRaces[i]);
  }
}

  // Part 6
let pastRacesAdd = document.getElementById("past-races");  // dont use querySelectorAll
 let pastRaceAddEl = document.createElement('li');
 pastRaceAddEl.textContent = "Farmington";
 pastRacesAdd.appendChild(pastRaceAddEl);

  // Part 7
let mainNode = document.querySelector(".main");
let divTag = document.createElement('div');
divTag.classList.add('blog-post', 'purple');
let h1Tag = document.createElement('h1');
h1Tag.textContent = "Farmington";
let pTag = document.createElement('p');
pTag.textContent = "I never raced a car in Farmington so far.";
divTag.appendChild(h1Tag);
divTag.appendChild(pTag);
mainNode.appendChild(divTag);

  // Part 8
 
  let quoteTl = document.querySelector("#quote-title");
  quoteTl.addEventListener("click",randomQuote);

  // Part 9
let mouseEvent = document.querySelectorAll(".blog-post");
let  mouseoutFunc = function() {
  this.classList.toggle("purple");
  // console.log("mouseout event triggered");
};

const mouseenterFunc = function() {
  this.classList.toggle("red");
  // console.log("mouseenter event triggered");
};

for(let i = 0; i< mouseEvent.length; i++){
  mouseEvent[i].addEventListener("mouseout",mouseoutFunc )
}
for(let i = 0; i< mouseEvent.length; i++){
  mouseEvent[i].addEventListener("mouseenter",mouseenterFunc)
}

});
