console.log('JS Loaded!');

// Play game
// (3) questions
// click the start button to play audio clip (each clip is 10 sec approx)
// player chooses which image of 3 for the 1 audio clip.
// image chosen then (flips) to display correct / wrong answer (counter shows no of questions)
// this continues until (3) questions to win, if wrong answer the player loses, game stops. 

// there is a progress bar to display time left to answer
// there is potentially a level 2. 

document.getElementById("start").addEventListener("click", function(e){
  alert("Get Ready!");
  var round = 0;
  var rounds = [{
    images: ["images/houseTV.jpg", "images/prisonTV.jpg", "images/frasierTV.jpg"],
    sounds: ["House.mp3"]
  }];

  var roundsTwo = [{
    images: ["images/veepTV.jpg", "images/cardsTV.jpg", "images/dexterTV.jpg"],
    sounds: ["Dexter.mp3"]
  }];

  var roundsThree = [{
    images: ["images/dangermouseTV.jpg", "images/policeTV.jpg", "images/mashTV.jpg"],
    sounds: ["Police_Squad.mp3"]


// document.getElementById('image1').addEventListener('click', function() {

// });

// document.getElementById('image2').addEventListener('click', function() {

// });
  
// document.getElementById('image3').addEventListener('click', function() {

// });

  if (rounds.images === "images/frasierTV.jpg") {
    alert('Wrong answer!');
    // flip the card
  }
  else if (rounds.images === "images/prisonTV.jpg") {
    alert('Wrong answer!');
    // flip the card
  }
  else { rounds.images === "images/houseTV.jpg" 
      alert('Correct answer!');
    // flip the card
  }    



  //if(rounds.images === 0) {

  //}

  }];
  
  // if (round === 1){
  //   images[round]
  //   sounds[round]
  //   round++;
  // }


  // // add audio to click start button
  // var questionOne = new Audio("audio/" + "House" + ".mp3");   
  //   questionOne.play(); 


});




