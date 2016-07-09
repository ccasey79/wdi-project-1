console.log('JS Loaded!');

// Play game
// (3) questions
// click the start button to play audio clip (each clip is 10 sec approx)
// player chooses which image of 3 for the 1 audio clip.
// image chosen then (flips) to display correct / wrong answer (counter shows no of questions)
// this continues until (3) questions to win, if wrong answer the player loses, game stops. 

// there is a progress bar to display time left to answer
// there is potentially a level 2.

var level = 0;
var rounds = [{
  images: ["images/houseTV.jpg", "images/prisonTV.jpg", "images/frasierTV.jpg"],
  sound: "House.mp3"
}, {
  images: ["images/veepTV.jpg", "images/cardsTV.jpg", "images/dexterTV.jpg"],
  sound: "Dexter.mp3"
}, {
  images: ["images/dangermouseTV.jpg", "images/policeTV.jpg", "images/mashTV.jpg"],
  sound: "Police.mp3"
}];

var images = document.getElementsByTagName("img");

document.getElementById("start").addEventListener("click", function(e){
  alert("Get Ready!");

  rounds[level].images.forEach(function(imgSrc, i) {
    images[i].setAttribute('src', imgSrc);
  });

  var audio = new Audio("audio/" + rounds[level].sound);
  audio.play();

});

// add event listeners to all images (using a loop)

// check image src of the clicked image against the name of the current audio
// this.getAttribute('src') --> "images/prisonTV"
// rounds[level].sound
// check they match

// if they match, increment score and/or round...

















  
  // if (round === 1){
  //   images[round]
  //   sounds[round]
  //   round++;
  // }


  // // add audio to click start button
  // var questionOne = new Audio("audio/" + "House" + ".mp3");   
  //   questionOne.play(); 


// });




