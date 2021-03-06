console.log('JS Loaded!');

// Play game
// (8) questions
// click the start button to play audio clip (each clip is 10 sec approx)
// player chooses which image of 3 for the 1 audio clip.
// image chosen then (flips) to display correct / wrong answer (counter shows no of questions)
// this continues until (8) questions to win, if wrong answer the player loses, game stops. 
// there is potentially a level 2.

var score = 0;
var userScore = document.getElementById('score');
userScore.innerHTML = score;
var question = 0;
var unshuffledRounds = [{
  images: ["images/houseTV.jpg", "images/chicagoTV.jpg", "images/frasierTV.jpg"],
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
var winSound = new Audio("audio/" + "match" + ".wav");
var loseSound = new Audio("audio/" + "wrong" + ".wav");
var startButton = document.getElementById("start");
var finishedGame = document.getElementById("finished-game");

startButton.addEventListener("click", function(e){
  this.className = "hidden";
  question = 0;
  score = 0;
  userScore.innerHTML = score;
  changeTheRound();
});

function changeTheRound(){
  finishedGame.className = "hidden";
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
      winSound.play();
      question++;
    } else {
      this.src = "images/redcross.jpg";
      audio.pause();
      loseSound.play();
      question++;
    }

    if (question === 8) {
      revealTheScore();
    }
    else {
      setTimeout(changeTheRound, 2000);
    }

  });
}

function revealTheScore(){
  setTimeout(function() {
    finishedGame.className = "";
    startButton.className = "";
  }, 1000);
}














