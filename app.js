const buttonElement = document.getElementsByClassName("btn__reset")[0];
const phrases = ["Hello world",
"I love you",
"Stay foolish", 
"Keep going", 
"Long way home"];
let missed = 0;


//Hiding "start game button"
buttonElement.addEventListener("click", () => {
  overlay.style.visibility = "hidden";
  const phraseDisplay = document.querySelectorAll(".letter");
  for (let i = 0; i < phraseDisplay.length; i++) {
    phraseDisplay[i].classList.add("newTransition");
  }
});

//Getting random phrase and splitting it
function getRandomPhraseAsArray(arr){
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const splitPhrase = randomPhrase.split("");
  return splitPhrase;
} 

//Displaying the phrase
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let Li = document.createElement("LI");
    Li.textContent = arr[i];
    const phraseUl = document.querySelector("#phrase ul");
    phraseUl.appendChild(Li);
    if ( arr[i] !== " ") {
      Li.classList.add("letter");
    }
  }
}

//Checking the letter if it matches the inputed letter 
function checkLetter(button) {
  const inputLetter = document.getElementsByClassName("letter");
  let correctInput = null;
  for (let i = 0; i < inputLetter.length; i ++) {
    if (inputLetter[i].textContent.toLowerCase() === button) {
      inputLetter[i].classList.add("show");
      correctInput = inputLetter[i].textContent;
    } 
  }
  return correctInput;
}

//Counting missed guesses and checking win or lose
const keyBoard = document.querySelector("#qwerty");
keyBoard.addEventListener("click", (e) => {
  let button = e.target;
  if ( button.tagName === "BUTTON" ) {
      button.classList.add("chosen");
      button.disabled = true;
    }
  let letterFound = checkLetter(button.textContent);
  if ( letterFound === null) {
      document.querySelector("ol li").remove();
      missed ++ ;
    } 
  checkWin();
  });
  
  //The function of checking outcome of a game
 function checkWin() {
  let numberOfLetter = document.getElementsByClassName("letter");
  let numberOfShow = document.getElementsByClassName("show");
    if ( numberOfLetter.length === numberOfShow.length) {
      overlay.style.visibility= "visible";
      let title = document.querySelector("#overlay h2");
      title.innerText = "Win" ;
      buttonElement.innerText ="Success! Try again?";
      // let resetButton = document.createElement("BUTTON");
    } else if ( missed >= 5) {
      overlay.style.visibility= "visible";
      let title = document.querySelector("#overlay h2");
      title.innerText= "Lose" ;
      buttonElement.innerText ="Failure! Try again?";
    }
      buttonElement.addEventListener("click", () => {
        
      });
  }

  function reset() {
    for (let i = 0; i < inputLetter.length; i ++) {
        const inputLetter = document.getElementsByClassName("letter");
        inputLetter[i].classList.add("show");
        correctInput = inputLetter[i].textContent;
      } 
    };


