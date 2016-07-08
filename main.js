console.log('JS Loaded!');

// Play game
// 3 questions
// click the start button to play audio clip (each clip is 10 sec approx)
// player chooses which image for the audio clip
// image then (flips) to display correct / wrong answer (counter shows no of questions)
// this continues until 3 questions to win, if wrong answer the player loses, game stops. 

// there is a progress bar to display time left to answer
// there is potentially a level 2. 

document.getElementById("start").addEventListener("click", function(e){
  alert("Get Ready!");
  var round = 0;
  var rounds = [{
    images: ["images/breakingbad.png", "images/narcos.png"],
    sounds: ["breakbadsound.mp3", "narcossound.mp3"]
  },
  {

  }
  ];

  // var images = ["images/breakingbad.png", "images/narcos.png"];
  // var sounds = ["breakbadsound.mp3", "narcossound.mp3"];
  // if (round === 1){
  //   images[round]
  //   sounds[round]
  //   round++;
  // }


  // add audio to click start button
  var questionOne = new Audio("audio/" + "House" + ".mp3");   
    
  questionOne.play(); 





  if () {

  }





});
