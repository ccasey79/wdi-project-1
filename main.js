console.log('JS Loaded!');

// Play game
// (3) questions
// click the start button to play audio clip (each clip is 10 sec approx)
// player chooses which image of 3 for the 1 audio clip.
// image chosen then (flips) to display correct / wrong answer (counter shows no of questions)
// this continues until (3) questions to win, if wrong answer the player loses, game stops. 

// there is a progress bar to display time left to answer
// there is potentially a level 2.

var score = 0;
var userScore = document.getElementById('score');
userScore.innerHTML = score;
var question = 0;
var unshuffledRounds = [{
  images: ["images/houseTV.jpg", "images/prisonTV.jpg", "images/frasierTV.jpg"],
  sound: "House.mp3",
  answer: 0
}, {
  images: ["images/veepTV.jpg", "images/cardsTV.jpg", "images/dexterTV.jpg"],
  sound: "Dexter.mp3",
  answer: 2
}, {
  images: ["images/dangermouseTV.jpg", "images/policeTV.jpg", "images/he_manTV.jpg"],
  sound: "Police_Squad.mp3",
  answer: 1
}, {
  images: ["images/fathertedTV.jpg", "images/prisonTV.jpg", "images/thronesTV.jpg"],
  sound: "Prison_Break.mp3",
  answer: 1
}, {
  images: ["images/friendsTV.jpg", "images/dynastyTV.jpg", "images/dallasTV.jpg"],
  sound: "Dallas.mp3",
  answer: 2
}, {
  images: ["images/roseanneTV.jpg", "images/wonderTV.jpg", "images/cheersTV.jpg"],
  sound: "Roseanne.mp3",
  answer: 0
}, {
  images: ["images/happyTV.png", "images/24TV.jpg", "images/miamiTV.jpg"],
  sound: "Miami.mp3",
  answer: 2
}, {
  images: ["images/dungeonsTV.jpg", "images/mashTV.jpg", "images/breakingbadTV.jpg"],
  sound: "Mash.mp3",
  answer: 1
}];

var rounds = unshuffledRounds.sort(function() {
  return .5 - Math.random();
});

var images = document.getElementsByTagName("img");
var audio = new Audio("audio/" + rounds[question].sound);
var winSound = new Audio("audio/" + rounds[question].sound);
var loseSound = new Audio("audio/" + rounds[question].sound);

document.getElementById("start").addEventListener("click", function(e){
  //alert("Start game!");
  
  changeTheRound();
  });

function changeTheRound(){
  console.log(rounds[question].sound);
  // if (question > 0){
  //   audio.pause();
  // }
  rounds[question].images.forEach(function(imgSrc, i) {
    images[i].setAttribute('src', imgSrc);
  });
  audio.src = "audio/" + rounds[question].sound;
  audio.play();
}

for(i = 0; i<images.length; i++) {
  images[i].addEventListener("click", function() {
    var answerIndex = rounds[question].answer; // 0
    var correctImageSrc = rounds[question].images[answerIndex]; // images/houseTV.jpg

    var correct = !!this.src.match(correctImageSrc);

    if(correct) {
      this.src = "images/correcttick.jpg";
      score += 10; 
      userScore.innerHTML = score;
      audio.pause();
      // winSound.play();
      question++;
    } else {
      this.src = "images/redcross.jpg";
      audio.pause();
      question++;
    }

    if (question === 2) {
      revealTheScore();
    }
    else {
      setTimeout(changeTheRound, 3000);
    }

  });
}

function revealTheScore(){
  // alert(score);
  var container = document.getElementById("container");
  var finishedGame = document.createElement("DIV");
  finishedGame.setAttribute("id", "finished-game");
  finishedGame.innerHTML = "The game is now over! The score was..", score;
  container.appendChild(finishedGame);
}


// From correct tick - move onto the next question
// counter to show 10 seconds (length of audio)
// wrong answer resets to the beginning
// After 8 questions - show 'you win!'

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











