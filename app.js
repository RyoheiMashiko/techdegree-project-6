let missed = 0;

let buttonElement = document.getElementsByClassName("btn__reset")[0];

buttonElement.addEventListener("click", () => {
  // const overlay = document.getElementById('overlay');
  overlay.style.display = "none";
});

const phrases = ["Hello world",
                  "I love you",
                  "Stay foolish", 
                  "Keep going", 
                  "Long way home"];


function getRandomPhraseAsArray(arr){
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  let splitPhrase = randomPhrase.split("");
  return splitPhrase;
} 

const phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for (let i = 0; i < arr.length; i ++) {
    let Li = document.createElement("LI");
    Li.textContent = arr[i];
    let phraseUl = document.querySelector("#phrase ul");
    phraseUl.appendChild(Li);
    if ( arr[i] !== " ") {
      Li.classList.add("letter");
    }
  }
}
addPhraseToDisplay(phraseArray); 


function checkLetter(button) {
  let inputLetter = document.getElementsByClassName("letter");
  let correctInput = null;
  for (let i = 0; i < inputLetter.length; i ++) {
    if (inputLetter[i].textContent.toLowerCase() === button) {
    inputLetter[i].classList.add("show");
    correctInput = inputLetter[i].textContent;
    } 
  }
  // return correctInput;
  return correctInput;
}

let keyBoard = document.querySelector("#qwerty");

keyBoard.addEventListener("click", (e) => {
  let button = e.target;
  if ( button.tagName === "BUTTON" ) {
      button.classList.add("chosen");
      button.disabled = true;
    }
  let letterFound = checkLetter(button.textContent);
  if( letterFound === null) {
      document.querySelector("ol li").remove();
      missed ++ ;
      console.log(missed);
    } 
  checkWin();
  });
  
 function checkWin() {
  let numberOfLetter = document.getElementsByClassName("letter");
  let numberOfShow = document.getElementsByClassName("show");
    if ( numberOfLetter.length === numberOfShow.length) {
      overlay.style.display = "block";
      let title = document.querySelector("#overlay h2");
      title.innerText= "Win" ;
    } else if ( missed >= 5) {
      overlay.style.display = "block";
      let title = document.querySelector("#overlay h2");
      title.innerText= "Lose" ;
    }
  }


// let test = document.getElementsByClassName("letter");

// let title = document.getElementsByClassName("title");
// // title.text("Win");
// title.innerText = "ovelay";
//   console.log(title);