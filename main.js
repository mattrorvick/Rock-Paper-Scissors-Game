// --- cached element references ---

// SCORES
const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");
const tScore = document.getElementById("tie-score");

// console.log(pScore, cScore, tScore);

pScore.innerHTML = 0;
cScore.innerHTML = 0;
tScore.innerHTML = 0;

const pImgEl = document.getElementById("player");
const cImgEl = document.getElementById("computer");

const RPS = ['rock', 'paper', 'scissors'];

// don't forget to clean up console.logs like this one later! We don't want to clutter the console!

const RPSLibrary = {
    rock: {
        // an object with three properties instead of a single array
        images: [
          {
            path: "images/rock.jpg",
            alt: "A rock"
          },
          {
            path: "images/rock1.jpg",
            alt: "A rock"
          },
          {
            path: "images/rock2.jpg",
            alt: "A rock"
          },
          {
            path: "images/rock3.jpg",
            alt: "A rock"
          }
        ],
        defeats: "scissors"
      },
      paper: {
        images: [
          {
            path: "images/paper.jpg",
            alt: "Some paper"
          },
          {
            path: "images/paper1.jpg",
            alt: "Some paper"
          },
          {
            path: "images/paper2.jpg",
            alt: "Some paper"
          },
          {
            path: "images/paper3.jpg",
            alt: "Some paper"
          }
        ],
        defeats: "rock"
      },
      scissors: {
        images: [
          {
            path: "images/scissors.jpg",
            alt: "Your handy dandy scissors"
          },
          {
            path: "images/scissors1.jpg",
            alt: "Your handy dandy scissors"
          },
          {
            path: "images/scissors2.jpg",
            alt: "Your handy dandy scissors"
          },
          {
            path: "images/scissors3.jpg",
            alt: "Your handy dandy scissors"
          }
        ],
        defeats: "paper"
      }
  };


// pImgEl.src = "images/paper1.jpg";


//consider altering the RPSLibrary to just RPS.. randomPicker() doesnt work in console.log with just RPS
  const randomPicker = () => {
    const weapon = RPS[Math.floor(Math.random() * 3)]; // selects a weapon at random

    console.log(weapon)

    return weapon
  };

// --- variables ---

// let results;
let winner, results, scores;

function init() {
    scores = {
        p: 0, // player
        t: 0, // tie
        c: 0 // computer
    };
                             // p is for player c is for computer
      results = {
        p: "rock",
        c: "rock"
      };
      winner = null; // null -no winner yet; if 'p' -player wins; if c -computer wins, if t - tie;
    }
                                // don't forget to call it! 
init()









function handleResults() {

    results.c = randomPicker();

    winner = getWinner();

    scores[winner]++;

    render();
    
    console.log("turn taken!", results, winner, scores);
}


function handleTurnR() {
    results.p = "rock";
    handleResults();
    console.log('rock');
}
function handleTurnP() {
    results.p = "paper";
    handleResults();
    console.log('paper');
}
function handleTurnS() {
    results.p = "scissors";
    handleResults();
    console.log('scissors');
}

/*----- event listeners -----*/
document.getElementById("rock-btn").addEventListener("click", handleTurnR);
document.getElementById("paper-btn").addEventListener("click", handleTurnP);
document.getElementById("scissors-btn").addEventListener("click", handleTurnS);

function getWinner() {
    // t for tie, p for player, c for computer
  if (results.p === results.c) {
    return "t";
  }
  // we can also use brackets to access a property in RPSLibrary that we'll set with a variable
  if (RPSLibrary[results.p].defeats === results.c) {
    return "p";
  }
  return "c";
}

/* function render() {
    const cImgEl = // consider deleting the El part on the end if it doesnt work.
      RPSLibrary[results.c].images[
        Math.floor(Math.random() * RPSLibrary[results.c].images.length)
      ];
    const pImgEl = // consider deleting the El part on the end if it doesnt work.
      RPSLibrary[results.p].images[
        Math.floor(Math.random() * RPSLibrary[results.p].images.length)
      ];
    console.log(cImgEl, pImgEl);
    // update scores
    // update images
    // highlight the winner
}
*/

function render() {
    // variables to break it down
    const cImgArray = RPSLibrary[results.c].images;
    const cLength = cImgArray.length;
    // with the break down:
    const cImg = cImgArray[Math.floor(Math.random() * cLength)];
  
    // not broken down:
    const pImg =
      RPSLibrary[results.p].images[
        Math.floor(Math.random() * RPSLibrary[results.p].images.length)
      ];
  
    // update scores
    pScore.innerHTML = scores.p;
    tScore.innerHTML = scores.t;
    cScore.innerHTML = scores.c;
  
    // update images
    cImgEl.src = cImg.path;
    cImgEl.alt = cImg.alt;
    pImgEl.src = pImg.path;
    pImgEl.alt = pImg.alt;
  
    // highlight the winner
    if (winner === "p") {
      pImgEl.style.borderColor = "gold";
      cImgEl.style.borderColor = "white";
      return;
    }
    if (winner === "c") {
      pImgEl.style.borderColor = "white";
      cImgEl.style.borderColor = "gold";
      return;
    }
    pImgEl.style.borderColor = "white";
    cImgEl.style.borderColor = "white";
  }


